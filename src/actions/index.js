import { startingDefnId, defnTypes } from '../constants'

let nextDefnId = startingDefnId

export const doNothing = () => ({
  type: 'DO_NOTHING',
})

export const addDefn = () => ({
  type: 'ADD_DEFN',
  defnId: nextDefnId++,
  defnType: defnTypes[0]
})

export const selectDefnType = (defnId, defnType) => ({
  type: 'ROW_SETTYPE',
  defnId,
  defnType
})

export const selectWaveType = (defnId, waveType) => ({
  type: 'ROW_GENWAVE_SETTYPE',
  defnId,
  waveType
})

export const selectWaveLen = (defnId, waveLen) => ({
  type: 'ROW_GENWAVE_SETLEN',
  defnId,
  waveLen
})

export const selectWaveFreq = (defnId, waveFreq) => ({
  type: 'ROW_GENWAVE_SETFREQ',
  defnId,
  waveFreq
})
