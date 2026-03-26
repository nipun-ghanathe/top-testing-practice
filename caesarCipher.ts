export function caesarCipher(str: string, shift: number) {
  const cipherCodes: number[] = []

  for (let char of str) {
    const charCode = char.charCodeAt(0)
    let newCharCode: number

    if (charCode >= 65 && charCode <= 90) {
      const base = 65
      newCharCode = ((charCode - base + shift + 26) % 26) + base
    } else if (charCode >= 97 && charCode <= 122) {
      const base = 97
      newCharCode = ((charCode - base + shift + 26) % 26) + base
    } else {
      newCharCode = charCode
    }

    cipherCodes.push(newCharCode)
  }

  return String.fromCharCode(...cipherCodes)
}
