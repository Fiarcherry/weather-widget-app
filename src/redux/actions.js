import {
  ADD_ROW,
  ROW_UP,
  ROW_DOWN,
  ROW_TOGGLE,
  CHANGE_TAB,
} from './actionTypes'

export const addRow = (content) => ({
  type: ADD_ROW,
  payload: {
    content,
  },
})

export const toggleRow = (id) => ({
  type: ROW_TOGGLE,
  payload: { id },
})

export const changeTab = (tab) => ({ type: CHANGE_TAB, payload: { tab } })

export const rowMoveUp = (id) => ({ type: ROW_UP, payload: { id } })

export const rowMoveDown = (id) => ({ type: ROW_DOWN, payload: { id } })

export const rowToggle = (id) => ({ type: ROW_TOGGLE, payload: { id } })
