import { connect } from 'react-redux'

import Picklist from '../components/Picklist'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: e => dispatch(ownProps.onChange({...ownProps, newValue: e.target.value}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picklist)
