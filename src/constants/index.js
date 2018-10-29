export const startingDefnId = 100

export const defnTypes = [
  'Do Nothing', 'Generate Wave', 'Mix'
]

export const initialRowStateFromDefnType = {
  'Do Nothing': {
    dummy: 'Entry'
  },
  'Generate Wave': {
    waveType: "Triangle",
    waveLen: 1000,
    waveFreq: 432
  }
}

export const waveTypes = [
  'Triangle', 'Square', 'Sawtooth', 'Sine'
]

export const defnColFlexes = [
  '10', '20', '80'
]
