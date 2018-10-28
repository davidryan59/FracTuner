const defaultStateToOverwrite = {
  defnId: -1,
  defnType: "UNDEFINED_TYPE"
}

const defnRow = (state = defaultStateToOverwrite, action) => {

  switch (action.type) {
    case 'ADD_DEFN':
      return {
        ...state,
        defnId: action.defnId,
        defnType: action.defnType
      }
    case 'ROW_SELECT_DEFN_TYPE':
      return {
        ...state,
        defnType: action.defnType
      }
    case 'ROW_SELECT_WAVE_TYPE':
      return {
        ...state,
        waveType: action.waveType
      }
    default:
      return state
  }

}

export default defnRow
