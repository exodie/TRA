<template>
  <header class="header">
    <nav class="header_navigation">
      <div class="icon_button_container">
        <button class="icon_button" @click="toggleIcon">
          <img :src="iconSrc" alt="Иконка" />
        </button>
      </div>
      <div class="button_container">
        <button class="filter_button">Filter 1</button>
        <button class="filter_button">Filter 2</button>
        <button class="filter_button">Filter 3</button>
      </div>
    </nav>
  </header>
  <div class="app-container">
    <div class="container">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <h2>{{ card.title }}</h2>
        <p>{{ card.description }}</p>
        <div class="image-placeholder"></div>
        <button class="redirect_btn">Перейти</button>
      </div>
    </div>
  </div>
</template>

<style>

.app-container {
  padding: 20px;
}

.container {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 16px;
  padding: 30px;
  box-sizing: border-box;
  border: 3px solid #c3bcbc;
  border-radius: 15px;
  margin: 0 auto;
}


.card {
  background-color: #333;
  color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  padding: 16px;
  box-sizing: border-box;
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

.filter_button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 4px;
  padding: 10px 29px;
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

.filter_button:hover {
  background-color: #0056b3;
}

.redirect_btn:hover {
  background-color: #0056b3;
}

.header {
  width: 100%;
}

.header_navigation {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
}

.icon_button_container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 20px 0;
}

.icon_button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
}

.button_container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 20px 0 20px 20px;
  margin-right: 0;
}

.button_container button:first-child {
  margin-left: 0;
}
</style>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import gridSvg from '../assets/img/grid.svg'
import logsSvg from '../assets/img/logs.svg'

class Card {
  title: string
  description: string

  constructor(title: string, description: string) {
    this.title = title
    this.description = description
  }

  static make(n: number): Card[] {
    const cards: Card[] = []
    for (let i = 0; i < n; i++) {
      cards.push(new Card(`Title ${i + 1}`, `Description ${i + 1}`))
    }


    return cards
  }
}

export default defineComponent({
  setup() {
    const cards = reactive<Card[]>(Card.make(12))

    const iconSrc = ref(gridSvg)

    const toggleIcon = () => {
      iconSrc.value = iconSrc.value === gridSvg
        ? logsSvg
        : gridSvg
    }

    return { cards, iconSrc, toggleIcon }
  }
})
</script>
