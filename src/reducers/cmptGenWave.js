import { validateWaveLen, validateWaveFreq } from '../validations'

const cmptGenWave = (state, action) => {

  // DEBUG
  console.log(action)

  switch (action.type) {
    case 'SETTYPE':
      return {
        ...state,
        waveType: action.waveType
      }
    case 'SETLEN':
      return {
        ...state,
        waveLen: validateWaveLen(action.waveLen)
      }
    case 'SETFREQ':
      return {
        ...state,
        waveFreq: validateWaveFreq(action.waveFreq)
      }
    default:
      return state
  }

}

export default cmptGenWave
