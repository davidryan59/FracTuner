import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { waveTypes } from '../constants'
import { selectWaveType, selectWaveLen, selectWaveFreq } from '../actions'
import PicklistC from '../containers/PicklistC'
import InputBoxC from '../containers/InputBoxC'

const CmptGen = ({row, flex}) => (

  <Column className='tableCell' flex={flex}>
    <Row className='tableSubPad'>
      <Column className='tableSubCell' flex='2'>
        <PicklistC
          defnId = {row.defnId}
          preLabel = 'Type'
          currentValue = {row.waveType}
          picklistValues = {waveTypes}
          onChange = {selectWaveType}
        />
      </Column>
      <Column className='tableSubCell' flex='3' horizontal='center'>
        <InputBoxC
          defnId = {row.defnId}
          preLabel = 'Length'
          currentValue = {row.waveLen}
          onChange = {selectWaveLen}
        />
      </Column>
      <Column
        className='tableSubCell'
        flex='3'
        horizontal='center'
        style={{display: (row.waveType==='Silence') ? 'none' : 'inline'}}
      >
        <InputBoxC
          defnId = {row.defnId}
          preLabel = 'Freq'
          currentValue = {row.waveFreq}
          onChange = {selectWaveFreq}
        />
      </Column>
    </Row>
  </Column>

)

export default CmptGen
