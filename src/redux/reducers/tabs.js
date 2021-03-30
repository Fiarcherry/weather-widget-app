import { CHANGE_TAB } from '../actionTypes'
import { TAB_TYPES } from '../../constants/tabs'

const initialState = {
  tab: TAB_TYPES.ALL,
}

const tabs = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB: {
      const { tab } = action.payload
      return { ...state, tab }
    }
    default:
      return state
  }
}

export default tabs
