import { connect } from 'react-redux'

import CmptMix from '../components/CmptMix'

import { addMix, delMix } from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addMix: () => dispatch(addMix({defnId: ownProps.row.defnId})),
  delMix: () => dispatch(delMix({defnId: ownProps.row.defnId})),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CmptMix)
