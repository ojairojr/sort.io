export function generateUniqueNumber() {
  return Math.floor(Math.random() * 8999999) + 1000000
}

export function generateNumbersArray(quantity: number): number[] {
  const arrayNumber: number[] = []
  for (let i = 0; i < quantity; i++) {
    arrayNumber.push(generateUniqueNumber())
  }
  return arrayNumber
}
