import { connect } from 'react-redux'

import DefnRow from '../components/DefnRow'

const mapStateToProps = (state, ownProps) => ({
  row: ownProps.row
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefnRow)
