import { connect } from 'react-redux'
import { rowMoveUp, rowMoveDown, rowToggle } from '../redux/actions'
import Button from './Button'

const WeatherRow = ({ row, rowMoveUp, rowMoveDown, rowToggle }) => {
  return (
    <tr>
      <td>{row.name}</td>
      <td>{row.temperature}</td>
      <td>
        <Button onClick={() => rowMoveUp(row.id)} title="Вверх" />
        <Button onClick={() => rowMoveDown(row)} title="Вниз" />
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

export default connect(null, { rowMoveUp, rowMoveDown, rowToggle })(WeatherRow)
