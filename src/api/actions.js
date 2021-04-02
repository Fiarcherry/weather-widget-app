import axios from 'axios'
import { API_KEY, API_BASE_URL, API_UNITS, API_LANG } from '../constants/api'
import { addRow } from '../redux/actions'

export const getWeatherByCityName = (cityName) => {
  const URL = `${API_BASE_URL}weather?q=${cityName}&appid=${API_KEY}&units=${API_UNITS}&lang=${API_LANG}`

  return async (dispatch) => {
    await axios
      .get(URL)
      .then((res) => {
        const city = { name: res.data.name, temp: res.data.main.temp }
        dispatch(addRow(city))
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }
}
