import { connect } from 'react-redux'

import DefnType from '../components/DefnType'
import { selectDefnType } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  value: ownProps.defnType
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: e => dispatch(selectDefnType(ownProps.defnId, e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefnType)
