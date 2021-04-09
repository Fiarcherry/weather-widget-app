import { useState } from 'react'
import { connect } from 'react-redux'
import { getWeatherByCityName } from '../api/actions'

import Button from './Button'
import TextInput from './TextInput'

import CircularProgress from '@material-ui/core/CircularProgress'
import useStyles from '../styles'

const SearchInput = ({ getWeatherByCityName }) => {
  const classes = useStyles()

  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [fetching, setFetching] = useState(false)

  const handleChange = (event) => {
    setError('')
    setValue(event.target.value)
  }

  const handleSubmitCitySearch = () => {
    getWeatherByCityName(value, setValue, setError, setFetching)
  }

  return (
    <div>
      <h2>Погода</h2>
      <TextInput
        name="cityName"
        label="Название города"
        type="text"
        className={classes.input}
        value={value}
        onChange={handleChange}
      />
      <Button
        className={classes.margin}
        onClick={handleSubmitCitySearch}
        title="Поиск"
      />
      <br />
      {fetching ? <CircularProgress /> : ''}
      <p className={classes.errorMessage}>{error}</p>
    </div>
  )
}

export default connect(null, { getWeatherByCityName })(SearchInput)
