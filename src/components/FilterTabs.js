import { connect } from 'react-redux'
import { changeTab } from '../redux/actions'
import { TAB_TYPES } from '../constants/tabs'
import { Link } from 'react-router-dom'

import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const mapStateToProps = (state) => {
  return { activeTab: state.tabs }
}

const FliterTabs = ({ activeTab, changeTab }) => {
  const handleChange = (event, value) => {
    changeTab(value)
  }

  return (
    <Paper square>
      <Tabs
        value={activeTab}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab
          label={TAB_TYPES.ALL}
          value={TAB_TYPES.ALL}
          component={Link}
          to="/all"
          {...(activeTab === TAB_TYPES.ALL ? { disabled: true } : {})}
        />
        <Tab
          label={TAB_TYPES.ACTIVE}
          value={TAB_TYPES.ACTIVE}
          component={Link}
          to="/active"
          {...(activeTab === TAB_TYPES.ACTIVE ? { disabled: true } : {})}
        />
        <Tab
          label={TAB_TYPES.DELETED}
          value={TAB_TYPES.DELETED}
          component={Link}
          to="/deleted"
          {...(activeTab === TAB_TYPES.DELETED ? { disabled: true } : {})}
        />
      </Tabs>
    </Paper>
  )
}

export default connect(mapStateToProps, { changeTab })(FliterTabs)
