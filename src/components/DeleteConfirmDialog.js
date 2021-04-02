import { useState } from 'react'
import { connect } from 'react-redux'
import { rowToggle } from '../redux/actions'

import Button from './Button'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'

const DeleteConfirmDialog = ({ row, rowToggle }) => {
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
        title={row.active ? 'Удалить' : 'Восстановить'}
      />
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>{`Удалить город ${row.name} из списка?`}</DialogTitle>
        <DialogActions>
          <Button onClick={handleCancel} title="Отмена" variant="text" />
          <Button
            autoFocus
            onClick={() => handleOk(row.id)}
            title="Подтвердить"
            variant="text"
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default connect(null, { rowToggle })(DeleteConfirmDialog)
