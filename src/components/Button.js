import ButtonMaterial from '@material-ui/core/Button'

const Button = ({
  onClick,
  title,
  variant = 'outlined',
  color = 'primary',
  ...props
}) => (
  <ButtonMaterial onClick={onClick} variant={variant} color={color} {...props}>
    {title}
  </ButtonMaterial>
)

export default Button
