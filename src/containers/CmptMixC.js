import { connect } from 'react-redux'

import CmptMix from '../components/CmptMix'

const mapStateToProps = (state, ownProps) => ({
  row: ownProps.row
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CmptMix)
