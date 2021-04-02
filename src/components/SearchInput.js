import { Button, Input } from '@material-ui/core'
import { useState } from 'react'
import { connect } from 'react-redux'
import { getWeatherByCityName } from '../api/actions'
import useStyles from '../styles'

const SearchInput = ({ getWeatherByCityName }) => {
  const classes = useStyles()

  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmitCitySearch = () => {
    getWeatherByCityName(value)
    setValue('')
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
    </div>
  )
}

export default connect(null, { getWeatherByCityName })(SearchInput)
