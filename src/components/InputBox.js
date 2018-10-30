import React from 'react'

const InputBox = ({preLabel, postLabel, currentValue, onChange}) => (
  <span style={{textAlign: 'center'}}>
    <label>
      {preLabel}
    </label>
    &nbsp;&nbsp;
    <input
      defaultValue = {currentValue}
      onBlur = {onChange}
      style = {{width:'70%', boxSizing:'border-box', fontFamily:'monospace'}}
    />
    &nbsp;&nbsp;
    {postLabel}
  </span>
)

export default InputBox


// onBlur fires when input box has lost focus, e.g. Enter key is pressed,
// which is really what we want.

// onChange fires on every keypress, definitely not what we want.
