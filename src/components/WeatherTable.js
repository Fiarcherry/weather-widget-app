import { connect } from 'react-redux'
import { getRowsByTab } from '../redux/selectors'
import WeatherRow from './WeatherRow'

const mapStateToProps = (state) => {
  const rows = getRowsByTab(state)
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
      {rows && rows.length
        ? rows.map((row, index) => {
            return <WeatherRow key={row.id} index={index} row={row} />
          })
        : ''}
    </tbody>
  </table>
)

export default connect(mapStateToProps)(WeatherTable)
