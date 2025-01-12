<script setup lang="ts">
import { pokerStore } from '@/store/poker';

function startGame() {
  pokerStore.setPokerState('game')
}
</script>

<template>
  <div>
    <h1>Guess the cards</h1>
    <button @click="startGame">PLAY</button>
  </div>

</template>


<style lang="css" scoped>
div {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 2em;
  text-align: center;
}
</style>
