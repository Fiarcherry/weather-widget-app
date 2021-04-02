import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Input from '@material-ui/core/Input'
import { useState } from 'react'
import { connect } from 'react-redux'
import { addRow } from '../redux/actions'
import { API_BASE_URL, API_KEY, API_LANG, API_UNITS } from '../constants/api'
import useStyles from '../styles'
import axios from 'axios'
import errorHandler from '../api/errorTypes'

const SearchInput = ({ addRow }) => {
  const classes = useStyles()

  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [fetching, setFetching] = useState(false)

  const handleChange = (event) => {
    setError('')
    setValue(event.target.value)
  }

  async function handleSubmitCitySearch() {
    setFetching(true)

    const URL = `${API_BASE_URL}weather?q=${value}&appid=${API_KEY}&units=${API_UNITS}&lang=${API_LANG}`

    await axios
      .get(URL)
      .then((res) => {
        const city = { name: res.data.name, temp: res.data.main.temp }
        addRow(city)
        setValue('')
      })
      .catch((error) => {
        setError(errorHandler(error.response.data.message))
      })
    setFetching(false)
  }
  return (
    <div>
      <h2>Погода</h2>
      <Input
        className={classes.input}
        placeholder="Название города"
        value={value}
        onChange={handleChange}
      />
      <Button
        className={classes.margin}
        onClick={handleSubmitCitySearch}
        variant="outlined"
        color="primary"
      >
        Поиск
      </Button>
      <br />
      {fetching ? <CircularProgress /> : ''}
      <p className={classes.errorMessage}>{error}</p>
    </div>
  )
}

export default connect(null, { addRow })(SearchInput)
