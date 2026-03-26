import { reverseString } from './reverseString'

test('reverses single word', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test('reverses string with two words', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh')
})
