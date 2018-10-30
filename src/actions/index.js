import { startingIdValue, defnTypes } from '../constants'

let nextDefnId = startingIdValue
let nextMixId = startingIdValue

export const doNothing = () => ({
  type: 'DO_NOTHING',
})

export const directEditState = ({newValue}) => ({
  type: 'DIRECT_EDIT_STATE',
  newState: newValue
})

export const addDefn = () => ({
  type: 'ADD_DEFN',
  defnId: nextDefnId++,
  defnType: defnTypes[0]
})

export const dupDefn = ({defnId}) => ({
  type: 'DUP_DEFN',
  defnId,
  newDefnId: nextDefnId++
})

export const delDefn = ({defnId}) => ({
  type: 'DEL_DEFN',
  defnId
})

export const setLabel = ({defnId, newValue}) => ({
  type: 'ROW_SETLABEL',
  defnId,
  defnLabel: newValue
})

export const selectDefnType = ({defnId, newValue}) => ({
  type: 'ROW_SETTYPE',
  defnId,
  defnType: newValue
})

export const selectWaveType = ({defnId, newValue}) => ({
  type: 'ROW_GENWAVE_SETTYPE',
  defnId,
  waveType: newValue
})

export const selectWaveLen = ({defnId, newValue}) => ({
  type: 'ROW_GENWAVE_SETLEN',
  defnId,
  waveLen: newValue
})

export const selectWaveFreq = ({defnId, newValue}) => ({
  type: 'ROW_GENWAVE_SETFREQ',
  defnId,
  waveFreq: newValue
})

export const addMix = ({defnId}) => ({
  type: 'ROW_MIX_ADD',
  defnId: defnId,
  mixId: nextMixId++,
  childDefnId: defnId
})
// IMPROVE: childDefnId usually ought to be a valid earlier defnId,
// not the same one.

export const delMix = ({defnId}) => ({
  type: 'ROW_MIX_DEL',
  defnId: defnId,
})

export const setMix = ({defnId, mixId, newValue}) => ({
  type: 'ROW_MIX_N_SET',
  defnId,
  mixId,
  childDefnId: newValue
})
