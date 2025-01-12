import PokerSolver from 'pokersolver'

export const usePoker = () => {
  const generateCards = () => {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
    const suits = ['c', 'd', 'h', 's']
    const generated = new Set<string>()
    while (generated.size < 5) {
      const rank = ranks[Math.floor(Math.random() * ranks.length)]
      const suit = suits[Math.floor(Math.random() * suits.length)]
      const card = rank + suit
      generated.add(card)
    }
    return Array.from(generated)
  }

  // Function to determine correct ranking
  const determineRanking = (cards: string[]) => {
    const hand = PokerSolver.Hand.solve(cards)
    return hand.name
  }

  const generateOptions = (correctRanking: string) => {
    const allRankings = [
      'High Card',
      'One Pair',
      'Two Pair',
      'Three of a Kind',
      'Straight',
      'Flush',
      'Full House',
      'Four of a Kind',
      'Straight Flush',
      'Royal Flush',
    ]
    const options = [correctRanking]
    // Add two random incorrect rankings
    while (options.length < 3) {
      const randomRank = allRankings[Math.floor(Math.random() * allRankings.length)]
      if (!options.includes(randomRank)) {
        options.push(randomRank)
      }
    }
    // Shuffle the options
    return options.sort(() => Math.random() - 0.5)
  }

  return { generateCards, generateOptions, determineRanking }
}
