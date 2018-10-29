import { connect } from 'react-redux'

import InputBox from '../components/InputBox'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: e => dispatch(ownProps.onChange({...ownProps, newValue: e.target.value}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputBox)
 
