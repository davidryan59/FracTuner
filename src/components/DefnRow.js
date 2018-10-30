import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { defnTypes, defnColFlexes } from '../constants'

import { setLabel, selectDefnType } from '../actions'

import DefnIdC from '../containers/DefnIdC'
import InputBoxC from '../containers/InputBoxC'
import PicklistC from '../containers/PicklistC'
import CmptGenC from '../containers/CmptGenC'
import CmptMixC from '../containers/CmptMixC'

const chooseRowComponent = row => {
  const flex = defnColFlexes[3]
  switch (row.defnType) {
    case defnTypes[1]:
      return <CmptGenC row={row} flex={flex} />
    case defnTypes[2]:
      return <CmptMixC row={row} flex={flex} />
    default:
      return (
        <Column className='tableCell' flex={flex} horizontal='center' vertical='center'>
          &nbsp;
        </Column>
      )
  }
}

const DefnRow = ({row, dupDefn, delDefn}) => (
  <Row className='tableRow'>
    <Column className='tableCell' flex={defnColFlexes[0]} horizontal='center' vertical='center'>
      <DefnIdC defnId={row.defnId} />
    </Column>
    <Column className='tableCell' flex={defnColFlexes[1]} horizontal='center' vertical='center'>
      <InputBoxC
        defnId = {row.defnId}
        currentValue = {row.defnLabel}
        onChange = {setLabel}
      />
    </Column>
    <Column className='tableCell' flex={defnColFlexes[2]} horizontal='center' vertical='center'>
      <PicklistC
        defnId = {row.defnId}
        currentValue = {row.defnType}
        picklistValues = {defnTypes}
        onChange = {selectDefnType}
      />
    </Column>
    {chooseRowComponent(row)}
    <Column className='tableCell' flex={defnColFlexes[4]} horizontal='center' vertical='center'>
      <Row>
        <button onClick={dupDefn}>
          D
        </button>
        <button onClick={delDefn}>
          -
        </button>
      </Row>
    </Column>
  </Row>
)

export default DefnRow
