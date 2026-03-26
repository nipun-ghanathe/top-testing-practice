import { Calculator } from "./calculator"

const calc = new Calculator()

test('add correctly adds two numbers', () => {
  expect(calc.add(1, 2)).toBe(3)
})

test('subtract correctly subtracts two numbers', () => {
  expect(calc.subtract(1, 2)).toBe(-1)
})

test('multiply correctly multiplies two numbers', () => {
  expect(calc.multiply(1, 2)).toBe(2)
  expect(calc.multiply(1.5, 2)).toBeCloseTo(3)
})

test('divide correctly divides two numbers', () => {
  expect(calc.divide(1, 2)).toBeCloseTo(0.5)
  expect(calc.divide(4, 2)).toBe(2)
})
