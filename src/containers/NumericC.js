import { connect } from 'react-redux'

import Numeric from '../components/Numeric'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: e => dispatch(ownProps.onChange(ownProps.id, e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Numeric)
