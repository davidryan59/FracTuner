import React from 'react'
import { Column, Row } from 'simple-flexbox'

import { defnTypes, defnColFlexes } from '../constants'

import DefnIdC from '../containers/DefnIdC'
import DefnTypeC from '../containers/DefnTypeC'
import DefnCmptMixC from '../containers/DefnCmptMixC'

const chooseRow = (defnType) => {
  switch (defnType) {
    case defnTypes[1]:
      return <DefnCmptMixC />
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
      <DefnTypeC defnId={defnId} defnType={defnType} />
    </Column>
    { chooseRow(defnType) }
  </Row>
)

export default DefnRow
