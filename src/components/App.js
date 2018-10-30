import React from 'react'

import DefnTableC from '../containers/DefnTableC'
import StateEditorC from '../containers/StateEditorC'
import UndoRedoC from '../containers/UndoRedoC'

// DEBUG ONLY
import DefnTableFooterC from '../containers/DefnTableFooterC'

const App = () => (
  <div style={{ border: '2px green dashed'}}>
    <h1 style={{textAlign: 'center'}}>FracTuner</h1>
    <p style={{textAlign: 'center', fontStyle: 'italic'}}>Iteratively create musical sounds</p>

    <DefnTableFooterC />
    <span>(Temp copy of buttons)</span>
    <p></p>

    <UndoRedoC />
    <DefnTableC />
    <StateEditorC />
  </div>
)

export default App
