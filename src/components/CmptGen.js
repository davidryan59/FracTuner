import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { defnColFlexes } from '../constants'

const CmptGen = () => (

  <Column flex={defnColFlexes[2]} style={{ border: '2px lightblue dashed'}}>
    <Row style={{ border: '2px yellow solid'}}>
      <Column flex='2' horizontal='center' style={{ border: '2px brown solid'}}>
        This is a gen component!
      </Column>
      <Column flex='3' horizontal='center' style={{ border: '2px turquoise solid'}}>
      <p>This gen component 2!</p>
      </Column>
    </Row>
  </Column>

)

export default CmptGen
