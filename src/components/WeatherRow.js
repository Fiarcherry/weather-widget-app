import { connect } from 'react-redux'
import { updateRow, rowMoveUp, rowMoveDown } from '../redux/actions'
import { getRowsByTab } from '../redux/selectors'
import ConfirmDialog from './ConfirmDialog'

import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import ChangeDialog from './ChangeDialog'
import ButtonGroup from '@material-ui/core/ButtonGroup'

const mapStateToProps = (state) => {
  const rows = getRowsByTab(state)
  const rowsLength = rows.length
  return { rowsLength }
}

const WeatherRow = ({ row, index, rowsLength, rowMoveUp, rowMoveDown }) => {
  return (
    <TableRow hover key={row.name}>
      <TableCell component="th" scope="row">
        {row.name}
      </TableCell>
      <TableCell align="center">
        <ChangeDialog row={row} />
      </TableCell>
      <TableCell align="center">{row.temp}</TableCell>
      <TableCell align="center">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            onClick={() => rowMoveUp(row)}
            disabled={index === 0 ? true : false}
            color="primary"
            variant="outlined"
          >
            Вверх
          </Button>
          <Button
            onClick={() => rowMoveDown(row)}
            disabled={index === rowsLength - 1 ? true : false}
            color="primary"
            variant="outlined"
          >
            Вниз
          </Button>
        </ButtonGroup>
      </TableCell>
      <TableCell align="center">
        <ConfirmDialog row={row} />
      </TableCell>
    </TableRow>
  )
}

export default connect(mapStateToProps, {
  updateRow,
  rowMoveUp,
  rowMoveDown,
})(WeatherRow)
