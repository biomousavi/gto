declare module 'pokersolver' {
  export class Hand {
    static solve(cards: string[]): Hand;
    name: string;
    descr: string;
    cards: string[];
    rank: number;
    toString(): string;
  }
}
