import { connect } from 'react-redux'
import { TAB_TYPES } from '../constants/tabs'
import { rowMoveUp, rowMoveDown, rowToggle } from '../redux/actions'
import Button from './Button'

const WeatherRow = ({ row }) => {
  return (
    <tr>
      <td>{row.name}</td>
      <td>{row.temperature}</td>
      <td>
        <Button onClick={() => rowMoveUp(row.id)} title="Вверх" />
        <Button onClick={() => rowMoveDown(row.id)} title="Вниз" />
      </td>
      <td>
        <Button
          onClick={() => rowToggle(row.id)}
          title={row.status === TAB_TYPES.ACTIVE ? 'Удалить' : 'Восстановить'}
        />
      </td>
    </tr>
  )
}

export default connect(null, { rowMoveUp, rowMoveDown, rowToggle })(WeatherRow)
