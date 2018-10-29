import { addMix } from '../actions'

export const getMixItem = action => {
  return {
    mixId: action.mixId,
    childDefnId: action.childDefnId
  }
}

const getInitialMixArray = defnId => {
  const action1 = addMix({defnId})
  const action2 = addMix({defnId})
  return [getMixItem(action1), getMixItem(action2)]
}

export const getInitialState = (defnId, defnType) => {
  switch (defnType) {
    case 'Generate Wave':
      return {
        waveType: "Triangle",
        waveLen: 1000,
        waveFreq: 432
      }
    case 'Mix':
      return {
        mixes: getInitialMixArray(defnId)
      }
    default:
      return {}
  }
}
