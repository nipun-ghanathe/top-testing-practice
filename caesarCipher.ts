function getShiftedCharCode(charCode: number, shift: number) {
  const base =
    charCode >= 65 && charCode <= 90
      ? 65
      : charCode >= 97 && charCode <= 122
        ? 97
        : null
  return base !== null ? ((charCode - base + shift + 26) % 26) + base : charCode
}

export function caesarCipher(str: string, shift: number) {
  return String.fromCharCode(
    ...Array.from(str).map((char) =>
      getShiftedCharCode(char.charCodeAt(0), shift),
    ),
  )
}
