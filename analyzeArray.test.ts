import { analyzeArray } from './analyzeArray'

test('Handles array of numbers', () => {
  expect(analyzeArray([1, 2, 3, 5, 7])).toEqual({
    length: 5,
    min: 1,
    max: 7,
    average: 3.6,
  })
})

test('Handles empty array', () => {
  expect(analyzeArray([])).toEqual({
    length: 0,
    min: null,
    max: null,
    average: null,
  })
})
