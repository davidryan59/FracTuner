import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { maxMixSize } from '../constants'
import { selectMix } from '../actions'
import InputBoxC from '../containers/InputBoxC'

let nextKey = 0

const CmptMix = ({row, flex, addMix, delMix}) => (

  <Column flex={flex} style={{ border: '2px lightgreen dashed'}}>
    <Row style={{ border: '2px pink solid'}}>
      {(row.mixes.length >= maxMixSize) ? '' : (
          <Column horizontal='center' vertical='center' style={{ border: '2px yellow solid'}} >
            <button onClick={addMix}>
              +
            </button>
          </Column>
        )
      }
      <Column flex='10' style={{ border: '2px grey solid'}}>
        <Row>
        {row.mixes.map( mix =>
            <Column flex='1' key={nextKey++} horizontal='center' style={{ border: '2px lightblue solid'}}>
              {mix.mixId}
              <InputBoxC
                defnId = {row.defnId}
                type = 'number'
                mixId = {mix.mixId}
                preLabel = 'Id'
                widthPx = '50px'
                currentValue = {mix.childDefnId}
                onChange = {selectMix}
              />
            </Column>
        )}
        </Row>
      </Column>
      {(row.mixes.length < 3) ? '' : (
          <Column horizontal='center' vertical='center' style={{ border: '2px lightgreen solid'}} >
            <button onClick={delMix}>
              -
            </button>
          </Column>
        )
      }
    </Row>
  </Column>

)

export default CmptMix
