import { connect } from 'react-redux'

import CmptGen from '../components/CmptGen'

const mapStateToProps = (state, ownProps) => ({
  row: ownProps.row
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CmptGen)
