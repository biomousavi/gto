import PokerSolver from 'pokersolver';

/**
 * Composable for poker game functionality
 * @returns {Object} Object containing poker-related utility functions
 */
export const usePoker = () => {
  /**
   * Generates a random set of 5 poker cards
   * @returns {string[]} Array of 5 unique card strings in format 'rs' where r=rank and s=suit
   */
  const generateCards = () => {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    const suits = ['c', 'd', 'h', 's'];
    const generated = new Set<string>();
    while (generated.size < 5) {
      const rank = ranks[Math.floor(Math.random() * ranks.length)];
      const suit = suits[Math.floor(Math.random() * suits.length)];
      const card = rank + suit;
      generated.add(card);
    }
    return Array.from(generated);
  };

  /**
   * Determines the poker hand ranking for a given set of cards
   * @param {string[]} cards - Array of card strings in format 'rs' where r=rank and s=suit
   * @returns {string} Name of the poker hand ranking
   */
  const determineRanking = (cards: string[]) => {
    const hand = PokerSolver.Hand.solve(cards);
    return hand.name;
  };

  /**
   * Generates an array of 3 possible poker hand rankings, including the correct one
   * @param {string} correctRanking - The actual ranking that should be included in options
   * @returns {string[]} Array of 3 shuffled poker hand rankings
   */
  const generateOptions = (correctRanking: string) => {
    const allRankings = [
      'High Card',
      'Pair',
      'Two Pair',
      'Three of a Kind',
      'Straight',
      'Flush',
      'Full House',
      'Four of a Kind',
      'Straight Flush',
      'Royal Flush',
    ];
    const options = [correctRanking];
    // Add two random incorrect rankings
    while (options.length < 3) {
      const randomRank = allRankings[Math.floor(Math.random() * allRankings.length)];
      if (!options.includes(randomRank)) {
        options.push(randomRank);
      }
    }
    // Shuffle the options
    return options.sort(() => Math.random() - 0.5);
  };

  return { generateCards, generateOptions, determineRanking };
};
