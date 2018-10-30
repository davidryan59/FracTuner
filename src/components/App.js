import React from 'react'

import DefnTableC from '../containers/DefnTableC'
import StateEditorC from '../containers/StateEditorC'
import DefnTableButtonBarC from '../containers/DefnTableButtonBarC'

const App = () => (
  <div className='app'>
    <div className='title'>FracTuner</div>
    <div className='subtitle'>Iteratively create musical sounds</div>
    <DefnTableButtonBarC />
    <DefnTableC />
    <DefnTableButtonBarC />
    <StateEditorC />
  </div>
)

export default App
