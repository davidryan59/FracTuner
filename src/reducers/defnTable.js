import defnRow from './defnRow'

const defnTable = (state = [], action) => {

  let prefix = null
  let lenP = null
  const lenT = action.type.length

  prefix = 'ROW_'
  lenP = prefix.length
  if (lenP<lenT && action.type.substr(0,lenP) === prefix) {
    const newAction = {...action, type: action.type.substr(lenP)}
    return state.map( dRow => (dRow.defnId === action.defnId) ? defnRow(dRow, newAction) : dRow )
  }

  switch (action.type) {
    case 'ADD_DEFN':
      return [
        ...state,
        defnRow(undefined, action)
      ]
    case 'DUP_DEFN':
      return state.reduce( (accum, dRow) => {
          accum.push(dRow)
          if (dRow.defnId === action.defnId) accum.push({...dRow, defnId: action.newDefnId})
          return accum
        }, []
      )
    case 'DEL_DEFN':
      return state.filter( dRow => (dRow.defnId !== action.defnId) )
    default:
      return state
  }

}

export default defnTable
