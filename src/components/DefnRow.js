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
        <Column flex={flex} horizontal='center' vertical='center' style={{ border: '2px lightgreen dashed'}}>
          'UNDEFINED COMPONENT'
        </Column>
      )
  }
}

const DefnRow = ({row, dupDefn, delDefn}) => (
  <Row style={{ border: '2px green solid'}}>
    <Column flex={defnColFlexes[0]} horizontal='center' vertical='center' style={{ border: '2px brown dashed'}}>
      <DefnIdC defnId={row.defnId} />
    </Column>
    <Column flex={defnColFlexes[1]} horizontal='center' vertical='center' style={{ border: '2px darkgreen dashed'}} >
      <InputBoxC
        defnId = {row.defnId}
        currentValue = {row.defnLabel}
        onChange = {setLabel}
      />
    </Column>
    <Column flex={defnColFlexes[2]} horizontal='center' vertical='center' style={{ border: '2px tomato dashed'}}>
      <PicklistC
        defnId = {row.defnId}
        currentValue = {row.defnType}
        picklistValues = {defnTypes}
        onChange = {selectDefnType}
      />
    </Column>
    {chooseRowComponent(row)}
    <Column flex={defnColFlexes[4]} horizontal='center' vertical='center' style={{ border: '2px orangered dashed'}}>
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
