import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { defnColFlexes, waveTypes } from '../constants'
import { selectWaveType } from '../actions'
import PicklistC from '../containers/PicklistC'

const CmptGen = ({row}) => (

  <Column flex={defnColFlexes[2]} style={{ border: '2px lightgreen dashed'}}>
    <Row style={{ border: '2px pink solid'}}>
      <Column flex='2' horizontal='center' style={{ border: '2px black solid'}}>
        <PicklistC
          id = {row.defnId}
          currentValue = {row.waveType}
          picklistValues = {waveTypes}
          onChange = {selectWaveType}
        />
      </Column>
      <Column flex='3' horizontal='center' style={{ border: '2px grey solid'}}>
        <p>This is another mix component!</p>
      </Column>
      <Column flex='1' horizontal='center' style={{ border: '2px grey solid'}}>
        <p>3rd mix cmpt...</p>
      </Column>
    </Row>
  </Column>

)

export default CmptGen
