import { connect } from 'react-redux'
import { rowMoveUp, rowMoveDown, rowToggle } from '../redux/actions'
import { getRowsByTab } from '../redux/selectors'
import Button from './Button'

const mapStateToProps = (state) => {
  const { table, tabs } = state
  const rows = getRowsByTab(table, tabs)
  const rowsLength = rows.length
  return { rowsLength }
}

const WeatherRow = ({
  row,
  index,
  rowsLength,
  rowMoveUp,
  rowMoveDown,
  rowToggle,
}) => {
  return (
    <tr>
      <td>{row.name}</td>
      <td>{row.temp}</td>
      <td>
        <Button
          onClick={() => rowMoveUp(row)}
          title="Вверх"
          isDisabled={index === 0 ? true : false}
        />
        <Button
          onClick={() => rowMoveDown(row)}
          title="Вниз"
          isDisabled={index === rowsLength - 1 ? true : false}
        />
      </td>
      <td>
        <Button
          onClick={() => rowToggle(row.id)}
          title={row.deleted === false ? 'Удалить' : 'Восстановить'}
        />
      </td>
    </tr>
  )
}

export default connect(mapStateToProps, { rowMoveUp, rowMoveDown, rowToggle })(
  WeatherRow
)
