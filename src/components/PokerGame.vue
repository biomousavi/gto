<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import PokerCard from './PokerCard.vue';
import type { GameResult } from '@/types';
import { pokerStore } from '@/store/poker';
import { usePoker } from '@/composables/usePoker';
import PokerCardsContainer from './PokerCardsContainer.vue';
import { CORRECT_ANSWER_SECONDS, WRONG_ANSWER_SECONDS } from '@/utils/constants';

const poker = usePoker();

const cards = ref();
const options = ref();
const correctRank = ref();
let timerInterval: number;
const totalCorrect = ref<number>(0);
const gameResult = ref<GameResult>(null);

const increaseTotalCorrect = () => (totalCorrect.value += 1);
const generateCards = () => (cards.value = poker.generateCards());
const setGameResult = (result: GameResult) => (gameResult.value = result);
const determineRanking = () => (correctRank.value = poker.determineRanking(cards.value));
const generateOptions = () => (options.value = poker.generateOptions(correctRank.value));

function checkAnswer(selected: string) {
  clearInterval(timerInterval);
  if (selected === correctRank.value) {
    increaseTotalCorrect();
    setGameResult('Correct');
    pokerStore.setTimeLeft((pokerStore.timeLeft += CORRECT_ANSWER_SECONDS));
  } else {
    setGameResult('Wrong');
    // Not going to negative numbers
    if (pokerStore.timeLeft < 10) {
      pokerStore.setTimeLeft(0);
    } else {
      pokerStore.setTimeLeft((pokerStore.timeLeft -= WRONG_ANSWER_SECONDS));
    }
  }
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (pokerStore.timeLeft > 0) {
      pokerStore.setTimeLeft(pokerStore.timeLeft - 1);
    } else {
      clearInterval(timerInterval);
      pokerStore.setPokerState('end');
      pokerStore.addAttemptResult(totalCorrect.value);
    }
  }, 1000);
}

function startGame() {
  setGameResult(null);
  startTimer();
  generateCards();
  determineRanking();
  generateOptions();
}

function resetGame() {
  clearInterval(timerInterval);
  pokerStore.resetTimeLeft();
}

onMounted(() => startGame());
onUnmounted(() => resetGame());
</script>

<template>
  <div>
    <div class="game-result" v-if="gameResult">
      <h2>{{ gameResult }}</h2>

      <h3>
        <span>You </span>
        <span> {{ gameResult === 'Correct' ? 'gain' : 'loose' }} </span>
        <span> 10s</span>
      </h3>

      <button @click="startGame">Continue</button>
    </div>

    <div v-else class="poker-game">
      <p class="time-left">{{ pokerStore.timeLeft }}s ⏰</p>

      <PokerCardsContainer>
        <PokerCard v-for="card in cards" :card="card" :key="card" />
      </PokerCardsContainer>

      <div class="options-container">
        <button v-for="option in options" :key="option" @click="checkAnswer(option)">
          {{ option }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.time-left {
  font-size: 1.5em;
  text-align: right;
  padding: 1rem;
}

.options-container {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.poker-game {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  min-height: 100vh;
}

.game-result {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
