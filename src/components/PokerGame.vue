<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PokerCard from './PokerCard.vue';
import { pokerStore } from '@/store/poker';
import { usePoker } from '@/composables/usePoker';
import PokerCardsContainer from './PokerCardsContainer.vue';

const poker = usePoker();

const cards = ref();
const options = ref();
const correctRank = ref();

const generateCards = () => (cards.value = poker.generateCards());
const determineRanking = () => (correctRank.value = poker.determineRanking(cards.value));
const generateOptions = () => (options.value = poker.generateOptions(correctRank.value));

const checkAnswer = (selected: string) => {
  if (selected === correctRank.value) {
    pokerStore.setTimeLeft((pokerStore.timeLeft += 5));
  } else {
    pokerStore.setTimeLeft((pokerStore.timeLeft -= 10));
  }
};

// Timer function
let timerInterval: number;
const startTimer = () => {
  timerInterval = setInterval(() => {
    if (pokerStore.timeLeft > 0) {
      pokerStore.setTimeLeft(pokerStore.timeLeft - 1);
    } else {
      clearInterval(timerInterval);
      pokerStore.setPokerState('end');
    }
  }, 1000);
};

function initGame() {
  startTimer();
  generateCards();
  determineRanking();
  generateOptions();
}

onMounted(() => initGame());
</script>

<template>
  <div class="poker-game">
    <!-- Timer -->
    <p class="time-left">{{ pokerStore.timeLeft }}s ⏰</p>

    <!-- Cards -->
    <PokerCardsContainer>
      <PokerCard v-for="card in cards" :card="card" :key="card" />
    </PokerCardsContainer>

    <!-- Options -->
    {{ correctRank }}
    <div class="options-container">
      <button v-for="option in options" :key="option" @click="checkAnswer(option)">
        {{ option }}
      </button>
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
</style>
