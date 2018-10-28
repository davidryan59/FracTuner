import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { defnTypes, defnColFlexes } from '../constants'

import { selectDefnType } from '../actions'

import DefnIdC from '../containers/DefnIdC'
import PicklistC from '../containers/PicklistC'
import CmptGenC from '../containers/CmptGenC'
import CmptMixC from '../containers/CmptMixC'

const chooseRow = (defnType) => {
  switch (defnType) {
    case defnTypes[0]:
      return <CmptGenC />
    case defnTypes[1]:
      return <CmptMixC />
    default:
      return (
        <Column flex={defnColFlexes[2]} horizontal='center' style={{ border: '2px lightgreen dashed'}}>
          'UNDEFINED COMPONENT'
        </Column>
      )
  }
}

const DefnRow = ({ defnId, defnType }) => (
  <Row style={{ border: '2px green solid'}}>
    <Column flex={defnColFlexes[0]} horizontal='center' style={{ border: '2px brown dashed'}}>
      <DefnIdC defnId={defnId} />
    </Column>
    <Column flex={defnColFlexes[1]} horizontal='center' style={{ border: '2px tomato dashed'}}>
      <PicklistC
        id={defnId}
        currentValue={defnType}
        picklistValues={defnTypes}
        onChange = {selectDefnType}
      />
    </Column>
    { chooseRow(defnType) }
  </Row>
)

export default DefnRow
