import React from 'react'
import { Column } from 'simple-flexbox'

import DefnRowC from '../containers/DefnRowC'

let nextKey = 0;

const DefnTableBody = ({defnTable}) => (
  <Column style={{ border: '2px gray dashed'}}>
    {defnTable.map( defnRow =>
      <DefnRowC
        key={nextKey++}
        row={defnRow}
      />
    )}
  </Column>
)

export default DefnTableBody
