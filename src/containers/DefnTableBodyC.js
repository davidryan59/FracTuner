import { connect } from 'react-redux'

import DefnTableBody from '../components/DefnTableBody'

const mapStateToProps = (state, ownProps) => ({
  defnTable: state.present.defnTable
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefnTableBody)
