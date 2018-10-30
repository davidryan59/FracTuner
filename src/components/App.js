import React from 'react'

import DefnTableC from '../containers/DefnTableC'
import StateEditorC from '../containers/StateEditorC'
import DefnTableButtonBarC from '../containers/DefnTableButtonBarC'

const App = () => (
  <div className='app'>
    <h1 style={{textAlign: 'center'}}>FracTuner</h1>
    <p style={{textAlign: 'center', fontStyle: 'italic'}}>Iteratively create musical sounds</p>
    <DefnTableButtonBarC />
    <DefnTableC />
    <DefnTableButtonBarC />
    <StateEditorC />
  </div>
)

export default App
