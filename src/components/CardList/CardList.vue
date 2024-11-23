<template>
  <CardHeader />

  <!-- TODO: New component -->
  <div class="container">
    <div class="card" v-for="(card, index) in cards" :key="index">
      <h2>{{ card.title }}</h2>
      <p>{{ card.description }}</p>
      <div class="image-placeholder"></div>
      <button class="redirect_btn">Перейти</button>
    </div>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

  width: 100%;

  gap: 16px;
  padding: 10px;
  margin: 0 auto;
}

.card {
  width: 100%;

  background-color: #333;
  color: #fff;

  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);

  padding: 16px;
}

.card h2 {
  margin: 0 0 8px;
}

.card p {
  margin: 0 0 16px;
}

.image-placeholder {
  background-color: #555;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
  aspect-ratio: 16/9;
}

.redirect_btn {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 4px;
  padding: 10px 29px;
}

.redirect_btn:hover {
  background-color: #0056b3;
}

@media (width < 500px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>

<script setup lang="ts">
import { reactive } from 'vue'

import CardHeader from './CardHeader.vue'

type Card = {
  title: string
  description: string
}

const cards = reactive<Card[]>(makeCards(12))

function makeCards(value: number) {
  const cards = []

  for (let i = 0; i < value; i++) {
    cards.push({ title: `Title ${i + 1}`, description: `Description ${i + 1}` })
  }

  return cards
}
</script>
