<script setup lang="ts">
function startGame() {
  console.log('Game started');
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

button {
  padding: 10px 20px;
  background-color: #dbdbdb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
