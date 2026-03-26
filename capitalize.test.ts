import { capitalize } from './capitalize'

test('capitalizes a single lowercase word', () => {
  expect(capitalize('hello')).toBe('Hello')
})

test('capitalizes two lowercase words', () => {
  expect(capitalize('hello world')).toBe('Hello world')
})

test('capitalizes a single mixed case word', () => {
  expect(capitalize('hEllO')).toBe('HEllO')
})

test('handles empty string', () => {
  expect(capitalize('')).toBe('')
})
