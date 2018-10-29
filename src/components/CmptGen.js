import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { defnColFlexes, waveTypes } from '../constants'
import { selectWaveType, selectWaveLen, selectWaveFreq } from '../actions'
import PicklistC from '../containers/PicklistC'
import NumericC from '../containers/NumericC'

const CmptGen = ({row}) => (

  <Column flex={defnColFlexes[2]} style={{ border: '2px lightgreen dashed'}}>
    <Row style={{ border: '2px pink solid'}}>
      <Column flex='2' horizontal='center' style={{ border: '2px black solid'}}>
        <PicklistC
          id = {row.defnId}
          preLabel = 'Type'
          currentValue = {row.waveType}
          picklistValues = {waveTypes}
          onChange = {selectWaveType}
        />
      </Column>
      <Column flex='3' horizontal='center' style={{ border: '2px grey solid'}}>
        <NumericC
          id = {row.defnId}
          preLabel = 'Length'
          postLabel = '(ms)'
          currentValue = {row.waveLen}
          onChange = {selectWaveLen}
        />
      </Column>
      <Column flex='3' horizontal='center' style={{ border: '2px yellow solid'}}>
        <NumericC
          id = {row.defnId}
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
