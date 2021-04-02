import { useState } from 'react'
import { connect } from 'react-redux'
import { updateRow } from '../redux/actions'

import Button from './Button'
import TextInput from './TextInput'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

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

  const handleInputChange = (event) => {
    let { name, value } = event.target
    setCity((prevState) => ({ ...prevState, [name]: value }))
    setValid(!(cityName === '' || temp === '' || value === ''))
  }

  return (
    <div>
      <Button onClick={handleRowClick} title="Изменить" />
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Температура в городе</DialogTitle>
        <DialogContent>
          <TextInput
            autoFocus
            name="name"
            label="Название"
            type="text"
            value={cityName}
            onChange={handleInputChange}
            {...(cityName === '' ? { error: true } : {})}
          />
          <TextInput
            name="temp"
            label="Температура"
            type="number"
            value={temp}
            onChange={handleInputChange}
            {...(temp === '' ? { error: true } : {})}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} title="Отмена" variant="text" />
          <Button
            onClick={handleOk}
            title="Сохранить"
            variant="text"
            disabled={!valid}
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default connect(null, { updateRow })(ChangeDialog)
