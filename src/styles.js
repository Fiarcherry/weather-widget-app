import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  table: {
    width: 800,
  },
  input: {
    width: 300,
  },
  margin: {
    margin: theme.spacing(3),
  },
  errorMessage: {
    color: theme.palette.error.main,
  },
  emptyTableData: {
    color: '#BBB',
    fontSize: 64,
  },
}))

export default useStyles
