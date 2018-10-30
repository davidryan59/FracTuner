import React from 'react'

const UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
  <span>
    <button className='textButton' onClick={onUndo} disabled={!canUndo}>
      Undo
    </button>
    <button className='textButton' onClick={onRedo} disabled={!canRedo}>
      Redo
    </button>
  </span>
)

export default UndoRedo
