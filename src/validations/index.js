const boundNum = (numInTextForm, min, max, decimalPlaces, defaultVal) => {
  if (!isFinite(numInTextForm)) return defaultVal
  const num = 1 * numInTextForm
  if (num<min) return defaultVal
  if (num>max) return defaultVal
  const roundedNumStr = num.toFixed(decimalPlaces)   // String!
  const roundedNum = 1 * roundedNumStr
  return (Number.isInteger(roundedNum)) ? roundedNum : roundedNumStr
}

export const validateWaveLen = numInTextForm => boundNum(numInTextForm, 1, 10000, 0, 300)

export const validateWaveFreq = numInTextForm => boundNum(numInTextForm, 1, 10000, 2, 256)
