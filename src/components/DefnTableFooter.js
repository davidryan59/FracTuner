import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { defnColFlexes } from '../constants'

const DefnTableFooter = ({addDefn, doNothing}) => (
  <Row style={{ border: '2px cyan dashed'}}>
    <Column flex={defnColFlexes[0]} horizontal='center' style={{ border: '2px yellow solid'}} >
      <button onClick={addDefn}>
        +
      </button>
    </Column>
    <Column flex={defnColFlexes[1]} horizontal='center' style={{ border: '2px grey solid'}} >
      <button onClick={doNothing}>
        &nbsp;
      </button>
    </Column>
    <Column flex={defnColFlexes[2]} horizontal='center' style={{ border: '2px black solid'}} >
      &nbsp;
    </Column>
  </Row>
)

export default DefnTableFooter
