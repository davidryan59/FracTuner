import { connect } from 'react-redux'

import DefnRow from '../components/DefnRow'

import { dupDefn, delDefn } from '../actions'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dupDefn: () => dispatch(dupDefn({defnId: ownProps.row.defnId})),
  delDefn: () => dispatch(delDefn({defnId: ownProps.row.defnId}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefnRow)
