import { useState } from 'react'
import { connect } from 'react-redux'
import { rowToggle } from '../redux/actions'

import Dialog from '@material-ui/core/Dialog'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'

const ConfirmDialog = ({ row, rowToggle }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = (id, active) => {
    active ? setOpen(true) : rowToggle(id)
  }
  const handleCancel = () => setOpen(false)
  const handleOk = (id) => {
    rowToggle(id)
    setOpen(false)
  }

  return (
    <div>
      <Button
        onClick={() => handleOpen(row.id, row.active)}
        variant="outlined"
        color="primary"
      >
        {row.active ? 'Удалить' : 'Восстановить'}
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          {`Удалить город ${row.name} из списка?`}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Отмена
          </Button>
          <Button onClick={() => handleOk(row.id)} color="primary" autoFocus>
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default connect(null, { rowToggle })(ConfirmDialog)
