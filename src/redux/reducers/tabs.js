import { CHANGE_TAB } from '../actionTypes'
import { TAB_TYPES } from '../../constants/tabs'

const initialState = TAB_TYPES.ALL

const tabs = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return action.payload.tab
    default:
      return state
  }
}

export default tabs
