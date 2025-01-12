<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import type { ComponentLoader, GameState } from './types';
import { pokerStore } from './store/poker';

const stateComponents: Record<GameState, ComponentLoader> = {
  end: () => import('@/components/PokerEnd.vue'),
  game: () => import('@/components/PokerGame.vue'),
  start: () => import('@/components/PokerStart.vue'),
};

const stateComponent = computed(() => defineAsyncComponent(stateComponents[pokerStore.gameState]));
</script>

<template>
  <main>
    <component :is="stateComponent" />
  </main>
</template>
