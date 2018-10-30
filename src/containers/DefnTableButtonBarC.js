import { connect } from 'react-redux'

import DefnTableButtonBar from '../components/DefnTableButtonBar'

import { addDefn, doNothing } from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addDefn: () => dispatch(addDefn()),
  doNothing: () => dispatch(doNothing())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefnTableButtonBar)
