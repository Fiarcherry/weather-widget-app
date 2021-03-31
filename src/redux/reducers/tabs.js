import { CHANGE_TAB } from '../actionTypes'
import { TAB_TYPES } from '../../constants/tabs'

const defaultState = TAB_TYPES.ALL

const tabs = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TAB: {
      const { tab } = action.payload
      return tab
    }
    default:
      return state
  }
}

export default tabs
