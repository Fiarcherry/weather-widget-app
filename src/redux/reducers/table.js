import { ADD_ROW, ROW_UP, ROW_DOWN, ROW_TOGGLE } from '../actionTypes'

const defaultState = [
  { id: 0, name: 'qwe', temp: 12, active: true },
  { id: 1, name: 'zxc', temp: 13, active: false },
  { id: 2, name: 'asd', temp: 14, active: true },
]

const row = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ROW:
      const { city } = action.payload
      return [
        ...state,
        {
          id: state.length,
          name: city.name,
          temp: city.temp,
          active: true,
        },
      ]
    case ROW_UP: {
      const { row } = action.payload
      const indexOfRow = state.indexOf(row)

      return state.map((row, index) => {
        if (index === indexOfRow) return state[indexOfRow - 1]
        else if (index === indexOfRow - 1) return state[indexOfRow]
        else return row
      })
    }
    case ROW_DOWN: {
      const { row } = action.payload
      const indexOfRow = state.indexOf(row)

      return state.map((row, index) => {
        if (index === indexOfRow) return state[indexOfRow + 1]
        else if (index === indexOfRow + 1) return state[indexOfRow]
        else return row
      })
    }
    case ROW_TOGGLE: {
      const { id } = action.payload
      return state.map((row) =>
        row.id === id ? { ...row, active: !row.active } : row
      )
    }
    default:
      return state
  }
}

export default row
