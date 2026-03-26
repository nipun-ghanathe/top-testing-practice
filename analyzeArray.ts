export function analyzeArray(arr: number[]) {
  if (arr.length === 0)
    return { length: 0, min: null, max: null, average: null }

  const result = arr.reduce(
    (acc, curr) => {
      if (curr < acc.min) acc.min = curr
      if (curr > acc.max) acc.max = curr
      acc.sum += curr
      return acc
    },
    { min: arr[0], max: arr[0], sum: 0 },
  )

  return {
    length: arr.length,
    min: result.min,
    max: result.max,
    average: result.sum / arr.length,
  }
}
