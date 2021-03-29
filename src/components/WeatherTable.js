import { connect } from 'react-redux'
import WeatherRow from './WeatherRow'

const mapStateToProps = (state) => {
  const rows = state.table
  return { rows }
}

const WeatherTable = ({ rows }) => (
  <table>
    <thead>
      <tr>
        <th>Название</th>
        <th>Температура</th>
        <th>Позиция</th>
        <th>Статус</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, index) => {
        return <WeatherRow key={index} row={row} />
      })}
    </tbody>
  </table>
)

export default connect(mapStateToProps)(WeatherTable)
