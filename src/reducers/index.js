import { combineReducers } from 'redux'
import undoable from 'redux-undo'

import defnTable from './defnTable'

const globalReducer = combineReducers({
  defnTable
})

const globalUndoableReducer = undoable(globalReducer, {limit: 50})

export default globalUndoableReducer
