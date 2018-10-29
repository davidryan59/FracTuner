import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { waveTypes } from '../constants'
import { selectWaveType, selectWaveLen, selectWaveFreq } from '../actions'
import PicklistC from '../containers/PicklistC'
import InputBoxC from '../containers/InputBoxC'

const CmptGen = ({row, flex}) => (

  <Column flex={flex} vertical='center' style={{ border: '2px lightgreen dashed'}}>
    <Row style={{ border: '2px pink solid'}}>
      <Column flex='2' horizontal='center' style={{ border: '2px black solid'}}>
        <PicklistC
          defnId = {row.defnId}
          preLabel = 'Type'
          currentValue = {row.waveType}
          picklistValues = {waveTypes}
          onChange = {selectWaveType}
        />
      </Column>
      <Column flex='3' horizontal='center' style={{ border: '2px grey solid'}}>
        <InputBoxC
          defnId = {row.defnId}
          type = 'number'
          preLabel = 'Length'
          widthPx = '60px'
          postLabel = '(ms)'
          currentValue = {row.waveLen}
          onChange = {selectWaveLen}
        />
      </Column>
      <Column flex='3' horizontal='center' style={{ border: '2px yellow solid'}}>
        <InputBoxC
          defnId = {row.defnId}
          type = 'number'
          preLabel = 'Freq'
          postLabel = '(Hz)'
          currentValue = {row.waveFreq}
          onChange = {selectWaveFreq}
        />
      </Column>
    </Row>
  </Column>

)

export default CmptGen
