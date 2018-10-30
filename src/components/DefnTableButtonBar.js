import React from 'react'
import { Column, Row } from 'simple-flexbox'

import UndoRedoC from '../containers/UndoRedoC'
import { defnColFlexes } from '../constants'

const combinedCol = (1*defnColFlexes[0]) + (1*defnColFlexes[1]) + (1*defnColFlexes[2])

const DefnTableButtonBar = ({addDefn, doNothing}) => (
  <Row className='buttonBar'>
    <Column className='buttonCell' flex={''+combinedCol} horizontal='center'>
      <Row>
        <button onClick={addDefn}>
          Add Row +
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <UndoRedoC />
      </Row>
    </Column>
    <Column className='buttonCell' flex={defnColFlexes[3]} horizontal='center'>
      &nbsp;
    </Column>
    <Column className='buttonCell' flex={defnColFlexes[4]} horizontal='center'>
      <button onClick={doNothing}>
        ·
      </button>
    </Column>
  </Row>
)

export default DefnTableButtonBar
