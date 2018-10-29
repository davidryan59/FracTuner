import React from 'react'

let nextPicklistOption = 0

const Picklist = ({id, preLabel, postLabel, picklistValues, currentValue, onChange}) => (
  <span>
    <label>
      {preLabel}
    </label>
    &nbsp;
    <select
      defaultValue = {currentValue}
      onChange = {onChange}
    >
      { picklistValues.map( pv => <option key={nextPicklistOption++}>{pv}</option> ) }
    </select>
    &nbsp;
    {postLabel}
  </span>
)

export default Picklist
