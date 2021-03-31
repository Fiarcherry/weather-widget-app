import { TAB_TYPES } from '../constants/tabs'

export const getRowsByTab = (rows, tab) => {
  switch (tab) {
    case TAB_TYPES.DELETED:
      return rows.filter((row) => row.deleted)
    case TAB_TYPES.ACTIVE:
      return rows.filter((row) => !row.deleted)
    case TAB_TYPES.ALL:
    default:
      return rows
  }
}
