export function makeCards(value: number) {
  const cards = []

  for (let i = 0; i < value; i++) {
    cards.push({ title: `Title ${i + 1}`, description: `Description ${i + 1}` })
  }

  return cards
}
