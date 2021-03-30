import { ADD_ROW, ROW_UP, ROW_DOWN, ROW_TOGGLE } from '../actionTypes'

const defaultState = [
  { id: 0, name: 'qwe', temperature: 12, deleted: true },
  { id: 1, name: 'zxc', temperature: 13, deleted: false },
  { id: 2, name: 'asd', temperature: 14, deleted: true },
]

const row = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ROW:
      const { content } = action.payload
      return [
        ...state,
        {
          id: state.length,
          name: content,
          temperature: 0,
          deleted: false,
        },
      ]
    case ROW_UP: {
      const { id } = action.payload
      let temp = state[id]

      return [
        ...state,
        state.slice
        (state[id] = state[id - 1]), 
        (state[id - 1] = temp)
      ]
    }
    case ROW_DOWN: {
      let temp = state[action.id]
      state[action.id] = state[action.id + 1]
      state[action.id + 1] = temp

      return state
    }
    case ROW_TOGGLE: {
      const { id } = action.payload
      return state.map((row) =>
        row.id === id ? { ...row, deleted: !row.deleted } : row
      )
    }
    default:
      return state
  }
}

export default row
