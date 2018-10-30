import { connect } from 'react-redux'

import StateEditor from '../components/StateEditor'

const mapStateToProps = (state, ownProps) => ({
  stateJSON: JSON.stringify(state.present)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StateEditor)
