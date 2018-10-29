import { initialRowStateFromDefnType } from '../constants'
import cmptGenWave from './cmptGenWave'

const defnRow = (state = {}, action) => {

  // DEBUG
  console.log(state)
  console.log(action)

  const prefix = 'GENWAVE_'
  const lenP = prefix.length
  if (action.type.substr(0,lenP) === prefix) {
    const newAction = {...action, type: action.type.substr(lenP)}
    return cmptGenWave(state, newAction)
  }

  switch (action.type) {
    case 'ADD_DEFN':
    case 'SETTYPE':
      return {
        ...initialRowStateFromDefnType[action.defnType],
        defnId: action.defnId,
        defnType: action.defnType
      }
    default:
      return state
  }

}

export default defnRow
