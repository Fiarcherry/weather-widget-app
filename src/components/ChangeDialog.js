import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

const ChangeDialog = () => {
  const [open, setOpen] = useState(false)

  const handleRowClick = () => setOpen(true)
  const handleCancel = () => setOpen(false)
  const handleOk = (row) => {
    console.log(row)
    //Изменить информацию о температуре города
    setOpen(false)
  }

  return (
    <div>
      <Button onClick={handleRowClick} variant="outlined" color="primary">
        Изменить
      </Button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Температура в городе</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="temp"
            label="Температура"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Отмена
          </Button>
          <Button onClick={handleOk} color="primary" autoFocus>
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ChangeDialog
