import defnRow from './defnRow'

const defnTable = (state = [], action) => {

  // DEBUG
  console.log(state)
  console.log(action)

  if (action.type.substr(0,4) === 'ROW_') return state.map(
    dRow => (dRow.defnId === action.defnId) ? defnRow(dRow, action) : dRow
  )

  switch (action.type) {
    case 'ADD_DEFN':
      return [
        ...state,
        defnRow(undefined, action)
      ]
    default:
      return state
  }

}

export default defnTable
