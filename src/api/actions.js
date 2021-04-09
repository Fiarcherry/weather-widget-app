import axios from 'axios'
import { API_KEY, API_BASE_URL, API_UNITS, API_LANG } from '../constants/api'
import { addRow } from '../redux/actions'
import errorHandler from './errorTypes'

export const getWeatherByCityName = (
  cityName,
  setValue,
  setError,
  setFetching
) => {
  const URL = `${API_BASE_URL}weather?q=${cityName}&appid=${API_KEY}&units=${API_UNITS}&lang=${API_LANG}`
  setFetching(true)
  return async (dispatch) => {
    await axios
      .get(URL)
      .then((res) => {
        const city = { name: res.data.name, temp: res.data.main.temp }
        dispatch(addRow(city))
        setValue('')
      })
      .catch((err) => {
        setError(errorHandler(err.response.data.message))
      })
      .finally(() => {
        setFetching(false)
      })
  }
}
