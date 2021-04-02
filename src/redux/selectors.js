import { TAB_TYPES } from '../constants/tabs'

export const getRowsByTab = (state) => {
  const { table, tabs } = state
  switch (tabs) {
    case TAB_TYPES.DELETED:
      return table.filter((row) => !row.active)
    case TAB_TYPES.ACTIVE:
      return table.filter((row) => row.active)
    case TAB_TYPES.ALL:
    default:
      return table
  }
}

export const getRows = (state) => {
  const { table } = state
  return table
}
