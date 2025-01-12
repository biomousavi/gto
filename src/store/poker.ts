import { reactive } from 'vue';
import type { GameState, PokerStore } from '@/types';
// using simple reactive as state management
// TODO: for more advanced usage, it's better to use Pinia
// https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api

const DEFAULT_TIME_LEFT = 100;
export const pokerStore = reactive<PokerStore>({
  gameState: 'start',
  attemptsResults: [],
  timeLeft: DEFAULT_TIME_LEFT,
  setTimeLeft(time: number) {
    this.timeLeft = time;
  },
  resetTimeLeft() {
    this.timeLeft = DEFAULT_TIME_LEFT;
  },
  setPokerState(state: GameState) {
    this.gameState = state;
  },
  addAttemptResult(attemptCorrectAnswers: number) {
    this.attemptsResults.push(attemptCorrectAnswers);
  },
});
