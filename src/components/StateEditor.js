import React from 'react'
import { Column, Row } from 'simple-flexbox'

// import InputBoxC from '../containers/InputBoxC'
// import { directEditState } from '../actions'

const StateEditor = ({stateJSON}) => (
  <Column
    horizontal = 'center'
    vertical = 'center'
    className = 'stateEditor'
    style = {{
      padding: '5px',
      fontFamily: 'monospace',
      fontSize: 9
    }}
  >
    <Row>
      <b>state.present</b>:&nbsp;&nbsp;{stateJSON}
    </Row>
  </Column>
)

export default StateEditor


// // Problem with this is it doesn't automatically update...
// // ...need a text viewer, edit button, and text editor that saves on blur.
//
// <InputBoxC
//   currentValue = {stateJSON}
//   onChange = {directEditState}
// />
