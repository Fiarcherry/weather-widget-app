import ButtonMaterial from '@material-ui/core/Button'
//Сейчас везде используется material ui
const Button = ({
  onClick,
  title,
  isDisabled = false,
  variant = 'outlined',
  color = 'primary',
}) => (
  <ButtonMaterial
    onClick={onClick}
    disabled={isDisabled}
    variant={variant}
    color={color}
  >
    {title}
  </ButtonMaterial>
)

export default Button
