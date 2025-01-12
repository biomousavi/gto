import { describe, it, expect } from 'vitest';
import { usePoker } from '../usePoker';

describe('usePoker', () => {
  const { generateCards, determineRanking, generateOptions } = usePoker();

  it('should generate 5 unique cards', () => {
    const cards = generateCards();
    expect(cards.length).toBe(5);
    const uniqueCards = new Set(cards);
    expect(uniqueCards.size).toBe(5);
  });

  it('should determine the correct ranking of a hand', () => {
    const cards = ['As', 'Ks', 'Qs', 'Js', 'Ts']; // Royal Flush
    const ranking = determineRanking(cards);
    expect(ranking).toBe('Straight Flush');
  });

  it('should generate options including the correct ranking', () => {
    const correctRanking = 'Full House';
    const options = generateOptions(correctRanking);
    expect(options.length).toBe(3);
    expect(options).toContain(correctRanking);
  });

  it('should generate options with unique rankings', () => {
    const correctRanking = 'Flush';
    const options = generateOptions(correctRanking);
    const uniqueOptions = new Set(options);
    expect(uniqueOptions.size).toBe(3);
  });
});
