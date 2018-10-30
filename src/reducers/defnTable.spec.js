import defnTable from './defnTable'

describe('defnTable reducer', () => {
  it('should handle initial state', () => {
    expect(
      defnTable(undefined, {type:''})
    ).toEqual([])
  })

  it('should handle ADD_DEFN', () => {
    expect(
      defnTable([], {
        type: 'ADD_DEFN',
        defnId: 42,
        defnType: 'Test type'
      })
    ).toEqual([
      {
        defnId: 42,
        defnLabel: 'Label42',
        defnType: 'Test type'
      }
    ])

    expect(
      defnTable([
        {
          defnId: 42,
          defnLabel: 'Label42',
          defnType: 'Test type'
        }
      ], {
        type: 'ADD_DEFN',
        defnId: 160,
        defnType: 'testing 123'
      })
    ).toEqual([
      {
        defnId: 42,
        defnLabel: 'Label42',
        defnType: 'Test type'
      },
      {
        defnId: 160,
        defnLabel: 'Label160',
        defnType: 'testing 123'
      }
    ])

  })

  it('should handle DEL_DEFN', () => {
    expect(
      defnTable([
        {
          defnId: 42,
          defnLabel: 'Label42',
          defnType: 'Test type'
        },
        {
          defnId: 160,
          defnLabel: 'Label160',
          defnType: 'testing 123'
        }
      ], {
        type: 'DEL_DEFN',
        defnId: 42
      })
    ).toEqual([
      {
        defnId: 160,
        defnLabel: 'Label160',
        defnType: 'testing 123'
      }
    ])

    expect(
      defnTable([
        {
          defnId: 42,
          defnLabel: 'Label42',
          defnType: 'Test type'
        },
        {
          defnId: 160,
          defnLabel: 'Label160',
          defnType: 'testing 123'
        }
      ], {
        type: 'DEL_DEFN',
        defnId: 161
      })
    ).toEqual([
      {
        defnId: 42,
        defnLabel: 'Label42',
        defnType: 'Test type'
      },
      {
        defnId: 160,
        defnLabel: 'Label160',
        defnType: 'testing 123'
      }
    ])

  })

})
