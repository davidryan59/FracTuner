import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { defnColFlexes } from '../constants'

const DefnTableHeader = () => (
  <Row className='tableHeader' horizontal='center'>
    <Column className='headerCell' flex={defnColFlexes[0]} horizontal='center'>
      Id
    </Column>
    <Column className='headerCell' flex={defnColFlexes[1]} horizontal='center'>
      Label
    </Column>
    <Column className='headerCell' flex={defnColFlexes[2]} horizontal='center'>
      Component
    </Column>
    <Column className='headerCell' flex={defnColFlexes[3]} horizontal='center'>
      Detail
    </Column>
    <Column className='headerCell' flex={defnColFlexes[4]} horizontal='center'>
      &nbsp;
    </Column>
  </Row>
)

export default DefnTableHeader
