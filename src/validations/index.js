// const boundNum = (numInTextForm, min, max, decimalPlaces, defaultVal) => {
//   if (!isFinite(numInTextForm)) return defaultVal
//   const num = 1 * numInTextForm
//   if (num<min) return defaultVal
//   if (num>max) return defaultVal
//   const roundedNumStr = num.toFixed(decimalPlaces)   // String!
//   const roundedNum = 1 * roundedNumStr
//   return (Number.isInteger(roundedNum)) ? roundedNum : roundedNumStr
// }

// Previous validations were for numeric only. Now want to be able to use text too.
//
// export const validateWaveLen = numInTextForm => boundNum(numInTextForm, 1, 9999, 0, 300)
//
// export const validateWaveFreq = numInTextForm => boundNum(numInTextForm, 1, 9999, 3, 256)
//
// export const validateMixChildDefnId = numInTextForm => boundNum(numInTextForm, 0, 9999, 0, 0)

export const validateRelabel = input => input
// This needs to make sure the new label is unique.
// If not, append random digits until it is unique!
// Must always work, and terminate after a finite number of steps.

export const validateWaveLen = input => input

export const validateWaveFreq = input => input

export const validateMixChildDefnId = input => input
