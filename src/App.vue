<script setup lang="ts">
import PokerCard from './components/PokerCard.vue';

</script>

<template>
  <header>

  </header>

  <main style="display: flex;">
    <PokerCard v-for="card of ['Ad', 'Ks', 'Qh', 'Jc', 'Td']" :card="card" :key="card" />
  </main>
</template>

<style scoped>

</style>
