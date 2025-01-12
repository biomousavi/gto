<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import type { ComponentLoader, GameState } from './types';
import { pokerStore } from './store/poker';



const stateComponents: Record<GameState, ComponentLoader> = {
  intro: () => import('@/components/PokerIntro.vue'),
  game: () => import('@/components/PokerGame.vue'),
  end: () => import('@/components/PokerIntro.vue'),
  result: () => import('@/components/PokerIntro.vue'),

}

const stateComponent = computed(() => defineAsyncComponent(stateComponents[pokerStore.gameState]))

</script>

<template>
  <main>
    <component :is="stateComponent" />
  </main>
</template>

