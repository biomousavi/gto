<script setup lang="ts">
import { pokerStore } from '@/store/poker';

</script>

<template>
  <div class="poker-game">
    <p>Time Left: {{ pokerStore.timeLeft }} seconds</p>

    <button>PLAY</button>
  </div>

</template>


<style lang="css" scoped>
.poker-game {
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

button {
  padding: 10px 20px;
  background-color: #dbdbdb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
