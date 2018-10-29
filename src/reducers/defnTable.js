import defnRow from './defnRow'

const defnTable = (state = [], action) => {

  // DEBUG
  console.log('')
  console.log(state)
  console.log(action)

  const prefix = 'ROW_'
  const lenP = prefix.length
  if (action.type.substr(0,lenP) === prefix) {
    const newAction = {...action, type: action.type.substr(lenP)}
    return state.map( dRow => (dRow.defnId === action.defnId) ? defnRow(dRow, newAction) : dRow )
  }

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
