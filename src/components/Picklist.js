import React from 'react'

let nextKey = 0;

const Picklist = ({ picklistValues, currentValue, onChange }) => (
  <div>
    {nextKey}&nbsp;
  <select
    defaultValue={currentValue}
    onChange={onChange}
  >
    { picklistValues.map( pv => <option key={nextKey++}>{pv}</option> ) }
  </select>
  </div>
)

export default Picklist
