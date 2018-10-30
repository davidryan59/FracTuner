import React from 'react'

let nextPicklistOption = 0

const Picklist = ({preLabel, postLabel, picklistValues, currentValue, onChange}) => (
  <span style={{textAlign: 'center'}}>
    <label>
      {preLabel}
    </label>
    &nbsp;&nbsp;
    <select
      defaultValue = {currentValue}
      onChange = {onChange}
    >
      { picklistValues.map( pv => <option key={nextPicklistOption++}>{pv}</option> ) }
    </select>
    &nbsp;&nbsp;
    {postLabel}
  </span>
)

export default Picklist
