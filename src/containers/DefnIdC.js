import { connect } from 'react-redux'

import DefnId from '../components/DefnId'

const mapStateToProps = (state, ownProps) => ({
  defnId: ownProps.defnId
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefnId)
