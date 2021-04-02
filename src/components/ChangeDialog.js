import { useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import { updateRow } from '../redux/actions'
import { connect } from 'react-redux'

const ChangeDialog = ({ row, updateRow }) => {
  const initialCityState = {
    name: row.name,
    temp: row.temp,
  }
  const [open, setOpen] = useState(false)
  const [{ name: cityName, temp }, setCity] = useState(initialCityState)
  const [valid, setValid] = useState(true)

  const handleRowClick = () => setOpen(true)
  const handleCancel = () => {
    setCity(initialCityState)
    setOpen(false)
  }
  const handleOk = () => {
    const city = { id: row.id, name: cityName, temp }
    console.log(city)
    updateRow(city)
    setOpen(false)
  }

  function handleInputChange(event) {
    let { name, value } = event.target
    setCity((prevState) => ({ ...prevState, [name]: value }))
    setValid(!(value === ''))
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
            name="name"
            label="Название"
            type="text"
            fullWidth
            value={cityName}
            onChange={handleInputChange}
            {...(cityName === '' ? { error: true } : {})}
          />
          <TextField
            margin="dense"
            name="temp"
            label="Температура"
            type="number"
            fullWidth
            value={temp}
            onChange={handleInputChange}
            {...(temp === '' ? { error: true } : {})}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Отмена
          </Button>
          <Button onClick={handleOk} color="primary" disabled={!valid}>
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default connect(null, { updateRow })(ChangeDialog)
