import { ADD_ROW, ROW_UP, ROW_DOWN, ROW_TOGGLE } from '../actionTypes'

import { TAB_TYPES } from '../../constants/tabs'

const defaultState = [
  { id: 0, name: 'qwe', temperature: 12, status: TAB_TYPES.ACTIVE },
  { id: 1, name: 'zxc', temperature: 13, status: TAB_TYPES.DELETED },
  { id: 2, name: 'asd', temperature: 14, status: TAB_TYPES.ACTIVE },
]

const row = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ROW:
      return [...state, action.name]
    case ROW_UP: {
      let temp = state[action.id]
      state[action.id] = state[action.id - 1]
      state[action.id - 1] = temp

      return state
    }
    case ROW_DOWN: {
      let temp = state[action.id]
      state[action.id] = state[action.id + 1]
      state[action.id + 1] = temp

      return state
    }
    case ROW_TOGGLE: {
      console.log(state)
      state[action.id].status === TAB_TYPES.ACTIVE
        ? (state[action.id].status = TAB_TYPES.DELETED)
        : (state[action.id].status = TAB_TYPES.ACTIVE)
      console.log(state)
      return state
    }
    default:
      return state
  }
}

export default row
