const defnId = (state=-1, action) => {

  switch (action.type) {
    case 'ADD_DEFN':
      return action.defnId
    default:
      return state
  }

}

export default defnId
