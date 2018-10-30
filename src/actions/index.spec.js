import * as actions from './index'

describe('actions', () => {

  it('doNothing works', () => {
    expect(actions.doNothing()).toEqual({
      type: 'DO_NOTHING'
    })
  })

  it('directEditState works', () => {
    expect(actions.directEditState({newValue:'New state value'})).toEqual({
      type: 'DIRECT_EDIT_STATE',
      newState: 'New state value'
    })
  })

  it('addDefn works', () => {
    expect(actions.addDefn()).toEqual({
      type: 'ADD_DEFN',
      defnId: 100,
      defnType: 'Do Nothing'
    })
  })

  it('dupDefn works', () => {
    expect(actions.dupDefn({defnId: 321})).toEqual({
      type: 'DUP_DEFN',
      defnId: 321,
      newDefnId: 101
    })
  })

  it('delDefn works', () => {
    expect(actions.delDefn({defnId: 4519})).toEqual({
      type: 'DEL_DEFN',
      defnId: 4519
    })
  })

  it('setLabel works', () => {
    expect(actions.setLabel({defnId: 2990, newValue: 'New value'})).toEqual({
      type: 'ROW_SETLABEL',
      defnId: 2990,
      defnLabel: 'New value'
    })
  })

  it('selectDefnType works', () => {
    expect(actions.selectDefnType({defnId: 293, newValue: 'New val'})).toEqual({
      type: 'ROW_SETTYPE',
      defnId: 293,
      defnType: 'New val'
    })
  })

  it('selectWaveType works', () => {
    expect(actions.selectWaveType({defnId: 472, newValue: 'Wave val'})).toEqual({
      type: 'ROW_GENWAVE_SETTYPE',
      defnId: 472,
      waveType: 'Wave val'
    })
  })

  it('selectWaveLen works', () => {
    expect(actions.selectWaveLen({defnId: 328, newValue: 'Len val'})).toEqual({
      type: 'ROW_GENWAVE_SETLEN',
      defnId: 328,
      waveLen: 'Len val'
    })
  })

  it('selectWaveFreq works', () => {
    expect(actions.selectWaveFreq({defnId: 5704, newValue: 'Freq val'})).toEqual({
      type: 'ROW_GENWAVE_SETFREQ',
      defnId: 5704,
      waveFreq: 'Freq val'
    })
  })

  it('addMix works', () => {
    expect(actions.addMix({defnId: 42})).toEqual({
      type: 'ROW_MIX_ADD',
      defnId: 42,
      mixId: 100,
      childDefnId: 42
    })
  })

  it('delMix works', () => {
    expect(actions.delMix({defnId: 73})).toEqual({
      type: 'ROW_MIX_DEL',
      defnId: 73
    })
  })

  it('setMix works', () => {
    expect(actions.setMix({defnId: 73, mixId: 74, newValue: 'New mix val'})).toEqual({
      type: 'ROW_MIX_N_SET',
      defnId: 73,
      mixId: 74,
      childDefnId: 'New mix val'
    })
  })

})
