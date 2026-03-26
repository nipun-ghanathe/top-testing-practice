export function caesarCipher(str: string, shift: number) {
  const cipherCodes: number[] = []

  for (let char of str) {
    const charCode = char.charCodeAt(0)

    const base =
      charCode >= 65 && charCode <= 90
        ? 65
        : charCode >= 97 && charCode <= 122
          ? 97
          : null

    const newCharCode =
      base !== null ? ((charCode - base + shift + 26) % 26) + base : charCode

    cipherCodes.push(newCharCode)
  }

  return String.fromCharCode(...cipherCodes)
}
