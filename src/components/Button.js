const Button = ({ onClick, title, isDisabled = false }) => (
  <button onClick={onClick} disabled={isDisabled}>
    {title}
  </button>
)

export default Button
