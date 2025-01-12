<script setup lang="ts">
import { usePoker } from '@/composables/usePoker';
import { pokerStore } from '@/store/poker';
import { onMounted, ref } from 'vue';
import PokerCardsContainer from './PokerCardsContainer.vue';
import PokerCard from './PokerCard.vue';

const poker = usePoker()
const cards = ref(poker.generateCards())

// const cards


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

onMounted(() => {
  startTimer();
});
</script>

<template>
  <div class="poker-game">
    <!-- Timer -->
    <p class="time-left"> {{ pokerStore.timeLeft }}s ⏰</p>

    <!-- Cards -->
    <PokerCardsContainer>
      <TransitionGroup name="fadedown">
        <PokerCard v-for="card in cards" :card="card" :key="card" />
      </TransitionGroup>
    </PokerCardsContainer>

    <!-- Options -->


  </div>

</template>


<style lang="css" scoped>
.time-left {
  font-size: 1.5em;
  text-align: right;
  padding: 1rem;
}
.poker-game {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  min-height: 100vh;
}

h1 {
  font-size: 2em;
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #dbdbdb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
