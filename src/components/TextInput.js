import TextField from '@material-ui/core/TextField'

const TextInput = ({
  onChange,
  value,
  name,
  label,
  type,
  fullWidth = true,
  margin = 'dense',
  ...props
}) => (
  <TextField
    name={name}
    label={label}
    type={type}
    fullWidth={fullWidth}
    margin={margin}
    value={value}
    onChange={onChange}
    {...props}
  />
)

export default TextInput
