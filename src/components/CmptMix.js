import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { maxMixSize } from '../constants'
import { setMix } from '../actions'
import InputBoxC from '../containers/InputBoxC'

let nextKey = 0

const CmptMix = ({row, flex, addMix, delMix}) => (

  <Column className='tableCell' flex={flex}>
    <Row className='tableSubPad'>
      {(row.mixes.length >= maxMixSize) ? '' : (
          <Column className='tableSubCell' horizontal='center' vertical='center'>
            <button onClick={addMix}>
              +
            </button>
          </Column>
        )
      }
      <Column className='tableSubCellGroup' flex='10'>
        <Row>
        {row.mixes.map( mix =>
            <Column className='tableSubCell' flex='1' key={nextKey++} horizontal='center'>
              <InputBoxC
                defnId = {row.defnId}
                mixId = {mix.mixId}
                currentValue = {mix.childDefnId}
                onChange = {setMix}
              />
            </Column>
        )}
        </Row>
      </Column>
      {(row.mixes.length < 3) ? '' : (
          <Column className='tableSubCell' horizontal='center' vertical='center'>
            <button onClick={delMix}>
              –
            </button>
          </Column>
        )
      }
    </Row>
  </Column>

)

export default CmptMix
