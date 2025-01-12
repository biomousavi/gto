export type GameState = 'start' | 'game' | 'end';
export type GameResult = 'Correct' | 'Wrong' | null;

export interface PokerStore {
  gameState: GameState;
  timeLeft: number;
  attemptsResults: number[];
  setTimeLeft(time: number): void;
  setPokerState(state: GameState): void;
  addAttemptResult(attemptCorrectAnswers: number): void;
}
