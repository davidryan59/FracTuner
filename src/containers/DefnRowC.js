import { connect } from 'react-redux'

import DefnRow from '../components/DefnRow'

const mapStateToProps = (state, ownProps) => ({
  defnId: ownProps.defnId,
  defnType: ownProps.defnType
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefnRow)
