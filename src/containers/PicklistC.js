import { connect } from 'react-redux'

import Picklist from '../components/Picklist'

const mapStateToProps = (state, ownProps) => ({
  currentValue: ownProps.currentValue,
  picklistValues: ownProps.picklistValues
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: e => dispatch(ownProps.onChange(ownProps.id, e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picklist)
