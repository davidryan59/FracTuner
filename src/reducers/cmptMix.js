import { getMixItem } from '../initialisation'

import cmptMixN from './cmptMixN'

const cmptMix = (state, action) => {

  let prefix = null
  let lenP = null
  const lenT = action.type.length

  prefix = 'N_'
  lenP = prefix.length
  if (lenP<lenT && action.type.substr(0,lenP) === prefix) {
    const newAction = {...action, type: action.type.substr(lenP)}
    return {
      ...state,
      mixes: state.mixes.map( item => (item.mixId === action.mixId) ? cmptMixN(item, newAction) : item )
    }
  }

  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        mixes: [
          ...state.mixes,
          getMixItem(action)
        ]
      }
    case 'DEL':
      return {
        ...state,
        mixes: (state.mixes.length>0) ? state.mixes.slice(0, state.mixes.length-1) : state.mixes
      }
    default:
      return state
  }

}

export default cmptMix
