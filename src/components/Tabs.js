import React from 'react'
import { connect } from 'react-redux'
import { changeTab } from '../redux/actions'
import { TAB_TYPES } from '../constants/tabs'
import Button from './Button'

const Tabs = ({ activeTab, changeTab }) => (
  <div>
    <span>Show: </span>
    <Button
      onClick={() => changeTab(TAB_TYPES.ALL)}
      title={TAB_TYPES.ALL}
      isDisabled={activeTab === TAB_TYPES.ALL ? true : false}
    />
    <Button
      onClick={() => changeTab(TAB_TYPES.ACTIVE)}
      title={TAB_TYPES.ACTIVE}
      isDisabled={activeTab === TAB_TYPES.ACTIVE ? true : false}
    />
    <Button
      onClick={() => changeTab(TAB_TYPES.DELETED)}
      title={TAB_TYPES.DELETED}
      isDisabled={activeTab === TAB_TYPES.DELETED ? true : false}
    />
  </div>
)

const mapStateToProps = (state) => {
  return { activeTab: state.tabs }
}

export default connect(mapStateToProps, { changeTab })(Tabs)
