import { reactive } from 'vue'
import type { GameState } from '@/types'
// using simple reactive as state management
// TODO: for more advanced usage, it's better to use Pinia
// https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api


export const pokerStore = reactive({
  gameState: 'game' as GameState,
  timeLeft: 100,
  setTimeLeft(time: number) {
    this.timeLeft = time
  },
  setPokerState(state: GameState) {
    this.gameState = state
  }
})
