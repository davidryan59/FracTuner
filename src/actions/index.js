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
  type: 'SELECT_DEFN_TYPE',
  defnId,
  defnType
})
