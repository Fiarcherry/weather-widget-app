import TabMaterial from '@material-ui/core/Tab'

const Tab = ({ label, value, ...props }) => (
  <TabMaterial label={label} value={value} {...props} />
)

export default Tab
