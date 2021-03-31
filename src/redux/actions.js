import {
  ADD_ROW,
  ROW_UP,
  ROW_DOWN,
  ROW_TOGGLE,
  CHANGE_TAB,
} from './actionTypes'

export const addRow = (city) => ({
  type: ADD_ROW,
  payload: { city },
})

export const changeTab = (tab) => ({
  type: CHANGE_TAB,
  payload: { tab },
})

export const rowMoveUp = (row) => ({
  type: ROW_UP,
  payload: { row },
})

export const rowMoveDown = (row) => ({
  type: ROW_DOWN,
  payload: { row },
})

export const rowToggle = (id) => ({
  type: ROW_TOGGLE,
  payload: { id },
})
