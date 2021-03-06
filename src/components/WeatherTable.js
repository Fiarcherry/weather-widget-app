import { connect } from 'react-redux'
import { getRowsByTab } from '../redux/selectors'

import WeatherRow from './WeatherRow'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import useStyles from '../styles'

const mapStateToProps = (state) => {
  const rows = getRowsByTab(state)
  return { rows }
}

const WeatherTable = ({ rows }) => {
  const classes = useStyles()

  return (
    <div>
      <TableContainer>
        <Table className={classes.table} size="small" aria-label="Погода">
          <TableHead>
            {rows && rows.length ? (
              <TableRow>
                <TableCell>Название</TableCell>
                <TableCell align="center">Температура</TableCell>
                <TableCell colSpan={3}></TableCell>
              </TableRow>
            ) : (
              ''
            )}
          </TableHead>
          <TableBody>
            {rows && rows.length ? (
              rows.map((row, index) => (
                <WeatherRow key={row.id} index={index} row={row} />
              ))
            ) : (
              <TableRow>
                <TableCell
                  align="center"
                  colSpan={5}
                  className={classes.emptyTableData}
                >
                  Данных нет
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
export default connect(mapStateToProps)(WeatherTable)
