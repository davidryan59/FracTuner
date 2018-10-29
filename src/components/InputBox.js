import React from 'react'

const InputBox = ({id, preLabel, postLabel, currentValue, onChange, type='text', widthPx='80px'}) => (
  <span>
    <label>
      {preLabel}
    </label>
    &nbsp;
    <input
      defaultValue = {currentValue}
      onBlur = {onChange}
      type = {type}
      style = {{textAlign: 'right', width: widthPx}}
    />
    &nbsp;
    {postLabel}
  </span>
)

export default InputBox 


// onBlur fires when input box has lost focus, e.g. Enter key is pressed,
// which is really what we want.

// onChange fires on every keypress, definitely not what we want.
