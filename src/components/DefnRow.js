import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { defnTypes, defnColFlexes } from '../constants'

import { selectDefnType } from '../actions'

import DefnIdC from '../containers/DefnIdC'
import PicklistC from '../containers/PicklistC'
import CmptGenC from '../containers/CmptGenC'
import CmptMixC from '../containers/CmptMixC'

const chooseRowComponent = row => {
  switch (row.defnType) {
    case defnTypes[1]:
      return <CmptGenC row={row} />
    case defnTypes[2]:
      return <CmptMixC row={row} />
    default:
      return (
        <Column flex={defnColFlexes[2]} horizontal='center' style={{ border: '2px lightgreen dashed'}}>
          'UNDEFINED COMPONENT'
        </Column>
      )
  }
}

const DefnRow = ({row}) => (
  <Row style={{ border: '2px green solid'}}>
    <Column flex={defnColFlexes[0]} horizontal='center' style={{ border: '2px brown dashed'}}>
      <DefnIdC defnId={row.defnId} />
    </Column>
    <Column flex={defnColFlexes[1]} horizontal='center' style={{ border: '2px tomato dashed'}}>
      <PicklistC
        id = {row.defnId}
        currentValue = {row.defnType}
        picklistValues = {defnTypes}
        onChange = {selectDefnType}
      />
    </Column>
    {chooseRowComponent(row)}
  </Row>
)

export default DefnRow
