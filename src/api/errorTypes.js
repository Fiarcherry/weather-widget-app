const errorHandler = (message) => {
  switch (message) {
    case 'city not found':
      return 'Город не найден'
    case 'Nothing to geocode':
      return 'Поле пустое'
    default:
      return
  }
}

export default errorHandler
