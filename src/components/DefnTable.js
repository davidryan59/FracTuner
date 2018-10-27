import React from 'react'

import DefnTableHeaderC from '../containers/DefnTableHeaderC'
import DefnTableBodyC from '../containers/DefnTableBodyC'
import DefnTableFooterC from '../containers/DefnTableFooterC'

const DefnTable = () => (
  <div style={{ border: '2px tomato solid'}}>
    <DefnTableHeaderC />
    <DefnTableBodyC />
    <DefnTableFooterC />
  </div>
)

export default DefnTable
