import React from 'react'
import { connect } from 'react-redux'
import { rowMoveUp, rowMoveDown } from '../redux/actions'
import { getRowsByTab } from '../redux/selectors'
import Button from './Button'
import ConfirmDialog from './ConfirmDialog'

const mapStateToProps = (state) => {
  const rows = getRowsByTab(state)
  const rowsLength = rows.length
  return { rowsLength }
}

const WeatherRow = ({ row, index, rowsLength, rowMoveUp, rowMoveDown }) => {
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
        <ConfirmDialog row={row} />
      </td>
    </tr>
  )
}

export default connect(mapStateToProps, {
  rowMoveUp,
  rowMoveDown,
})(WeatherRow)
