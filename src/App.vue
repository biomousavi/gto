<script setup lang="ts">
import PokerCard from './components/PokerCard.vue';
import PokerCardsContainer from './components/PokerCardsContainer.vue';

</script>

<template>
  <header>

  </header>

  <main>
    <PokerCardsContainer>
      <PokerCard v-for="card of ['Ad', 'Ks', 'Qh', 'Jc', 'Td']" :card="card" :key="card" />
    </PokerCardsContainer>
  </main>
</template>

<style scoped>

</style>
