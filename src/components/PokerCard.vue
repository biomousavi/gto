<template>
  <div class="card" :class="cardSuitClass">
    <div class="card-top card-suit"> {{ cardSuitSymbol }}</div>
    <div class="card-middle">
      <span class="card-rank">{{ cardRank }}</span>
    </div>
    <div class="card-bottom card-suit">{{ cardSuitSymbol }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Props
const props = defineProps({
  card: {
    type: String,
    required: true,
  },
});

// Computed properties
const cardRank = computed(() => {
  const rank = props.card[0];
  return rank === 'T' ? '10' : rank;
});
const cardSuit = computed(() => props.card[1]); // Extract suit (e.g., 'd', 's', 'h', 'c')
const cardSuitSymbol = computed(() => {
  // Map suit to emoji
  switch (cardSuit.value) {
    case 's':
      return '♠'; // Spades
    case 'h':
      return '♥'; // Hearts
    case 'd':
      return '♦'; // Diamonds
    case 'c':
      return '♣'; // Clubs
    default:
      return '';
  }
});
const cardSuitClass = computed(() => `suit-${cardSuit.value}`); // Dynamic class for suit-based styling
</script>

<style scoped>
.card {
  width: 35px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  position: relative;
}

.card-rank,
.card-suit {
  font-size: 12px;
  font-weight: bold;
}

.card-top {
  position: absolute;
  top: -4px;
  left: 2px;
}

.card-bottom {
  position: absolute;
  bottom: -4px;
  right: 2px;
}

.card-middle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.suit-s,
.suit-c {
  color: black;
}

.suit-h,
.suit-d {
  color: red;
}
</style>
