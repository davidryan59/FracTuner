import { getInitialState } from '../initialisation'
import cmptGenWave from './cmptGenWave'
import cmptMix from './cmptMix'

const defnRow = (state = {}, action) => {

  // DEBUG
  console.log(state)
  console.log(action)

  let prefix = null
  let lenP = null

  prefix = 'GENWAVE_'
  lenP = prefix.length
  if (action.type.substr(0,lenP) === prefix) {
    const newAction = {...action, type: action.type.substr(lenP)}
    return cmptGenWave(state, newAction)
  }

  prefix = 'MIX_'
  lenP = prefix.length
  if (action.type.substr(0,lenP) === prefix) {
    const newAction = {...action, type: action.type.substr(lenP)}
    return cmptMix(state, newAction)
  }

  switch (action.type) {
    case 'ADD_DEFN':
    case 'SETTYPE':
      return {
        defnId: action.defnId,
        defnType: action.defnType,
        ...getInitialState(action.defnId, action.defnType)
      }
    default:
      return state
  }

}

export default defnRow
