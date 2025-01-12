export type GameState = 'intro' | 'game' | 'result' | 'end';

export interface PokerStore {
  gameState: GameState;
  timeLeft: number;
  attemptsResults: number[];
  setTimeLeft(time: number): void;
  setPokerState(state: GameState): void;
  addAttemptResult(attemptCorrectAnswers: number): void;
}
