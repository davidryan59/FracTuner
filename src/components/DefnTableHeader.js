import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { defnColFlexes } from '../constants'

const DefnTableHeader = () => (
  <Row horizontal='center' style={{ border: '2px cyan dashed'}}>
    <Column flex={defnColFlexes[0]} horizontal='center' style={{ border: '2px green solid'}}>
      Id
    </Column>
    <Column flex={defnColFlexes[1]} horizontal='center' style={{ border: '2px green solid'}} >
      Label
    </Column>
    <Column flex={defnColFlexes[2]} horizontal='center' style={{ border: '2px cyan solid'}}>
      Component
    </Column>
    <Column flex={defnColFlexes[3]} horizontal='center' style={{ border: '2px purple solid'}}>
      Detail
    </Column>
    <Column flex={defnColFlexes[4]} horizontal='center' style={{ border: '2px pink solid'}} >
      &nbsp;
    </Column>
  </Row>
)

export default DefnTableHeader
