import defnRow from './defnRow'

const defnTable = (state = [], action) => {

  // DEBUG
  console.log(state)
  console.log(action)

  switch (action.type) {
    case 'ADD_DEFN':
      return [
        ...state,
        defnRow(undefined, action)
      ]
    case 'SELECT_DEFN_TYPE':
      return state.map( dRow => (dRow.defnId === action.defnId) ? defnRow(dRow, action) : dRow )
    default:
      return state
  }
}

export default defnTable
