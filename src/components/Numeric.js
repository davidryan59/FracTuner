import React from 'react'

const Numeric = ({id, preLabel, postLabel, currentValue, onChange, widthPx='80px'}) => (
  <span>
    <label>
      {preLabel}
    </label>
    &nbsp;
    <input
      defaultValue = {currentValue}
      onBlur = {onChange}
      type = 'number'
      style = {{textAlign: 'right', width: widthPx}}
    />
    &nbsp;
    {postLabel}
  </span>
)

export default Numeric


// onBlur fires when input box has lost focus, e.g. Enter key is pressed,
// which is really what we want.

// onChange fires on every keypress, definitely not what we want.
