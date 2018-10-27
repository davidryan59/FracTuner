import React from 'react'

import { defnTypes } from  '../constants'

let nextKey = 0;

const DefnType = ({ value, onChange }) => (
  <select
    defaultValue={value}
    onChange={onChange}
  >
    { defnTypes.map( defnType => <option key={nextKey++}>{defnType}</option> ) }
  </select>
)

export default DefnType
