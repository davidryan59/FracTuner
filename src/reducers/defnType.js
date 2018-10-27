const defnType = (state = 'INVALID DEFAULT', action) => {

  switch (action.type) {
    case 'ADD_DEFN':
      return action.defnType
    case 'SELECT_DEFN_TYPE':
      return action.defnType
    default:
      return state
  }

}

export default defnType
