import { caesarCipher } from "./caesarCipher"

test('works for simple cases', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor')
})

test('wrapping from z to a happens', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc')
})

test('case is preserved', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr')
})

test('punctuation remains unchanged', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

test('works with negative shift', () => {
  expect(caesarCipher('apple', -2)).toBe('ynnjc')
})
