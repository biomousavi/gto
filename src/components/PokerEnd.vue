<script setup lang="ts">
import { pokerStore } from '@/store/poker';

function onPlayAgain() {
  pokerStore.setPokerState('game');
}
</script>

<template>
  <div class="end-page">
    <h1>Leaderboard</h1>

    <div>
      <p v-for="(attempt, index) of pokerStore.attemptsResults" :key="attempt">
        attempt {{ index + 1 }} - {{ attempt }} answers
      </p>
    </div>

    <button @click="onPlayAgain">Play Again</button>
  </div>
</template>

<style lang="css" scoped>
.end-page {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
p {
  font-size: 1.5em;
  text-align: center;
  padding: 1rem;
}
</style>
