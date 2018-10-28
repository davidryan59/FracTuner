import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { defnColFlexes } from '../constants'

const CmptMix = () => (

  <Column flex={defnColFlexes[2]} style={{ border: '2px lightgreen dashed'}}>
    <Row style={{ border: '2px pink solid'}}>
      <Column flex='2' horizontal='center' style={{ border: '2px black solid'}}>
        This is a mix component!
      </Column>
      <Column flex='3' horizontal='center' style={{ border: '2px grey solid'}}>
        <p>This is another mix component!</p>
      </Column>
      <Column flex='1' horizontal='center' style={{ border: '2px grey solid'}}>
        <p>3rd  mix cmpt...</p>
      </Column>
    </Row>
  </Column>

)

export default CmptMix
