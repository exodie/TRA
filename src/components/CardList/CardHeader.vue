<script lang="ts">
import { defineComponent, ref } from 'vue'

import grid from '/img/grid.svg'
import logs from '/img/logs.svg'

export default defineComponent({
  setup() {
    const currentIcon = ref(grid)

    const toggleCurrentIcon = (): void => {
      currentIcon.value = currentIcon.value === grid ? logs : grid
    }

    return { currentIcon, toggleCurrentIcon }
  },
})
</script>

<template>
  <header class="container">
    <button class="toggle" @click="toggleCurrentIcon">
      <img :src="currentIcon" alt="icon" />
    </button>

    <!-- TODO: New component -->
    <ul class="list">
      <button class="item">filter</button>
      <button class="item">filter</button>
      <button class="item">filter</button>
    </ul>
  </header>
</template>

<style scoped>
.container {
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-inline: 10px;
}

.toggle {
  width: fit-content;
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
  }
}

.list {
  display: flex;
  flex-direction: row;
  align-items: center;

  column-gap: 8px;
}

/* TODO: Create button UI component */
.item {
  border: none;
  border-radius: 8px;

  padding-inline: 20px;
  padding-block: 10px;

  font-size: 18px;

  background-color: rgb(240, 240, 240);

  &:hover {
    background-color: rgb(225, 225, 225);

    cursor: pointer;
  }
}
</style>
