import React from 'react'
import { Column, Row } from 'simple-flexbox'

import UndoRedoC from '../containers/UndoRedoC'
import { defnColFlexes } from '../constants'

const DefnTableButtonBar = ({addDefn, doNothing}) => (
  <Row className='buttonBar'>
    <Column className='buttonCell' flex={defnColFlexes[0]} horizontal='center'>
      <button onClick={addDefn}>
        +
      </button>
    </Column>
    <Column className='buttonCell' flex={defnColFlexes[1]} horizontal='center'>
      <button onClick={doNothing}>
        &nbsp;
      </button>
    </Column>
    <Column className='buttonCell' flex={defnColFlexes[2]} horizontal='center'>
      <UndoRedoC />
    </Column>
    <Column className='buttonCell' flex={defnColFlexes[3]} horizontal='center'>
      &nbsp;
    </Column>
    <Column className='buttonCell' flex={defnColFlexes[4]} horizontal='center'>
      &nbsp;
    </Column>
  </Row>
)

export default DefnTableButtonBar
