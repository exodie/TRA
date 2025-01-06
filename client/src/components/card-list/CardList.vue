<script setup lang="ts">
import { reactive } from 'vue'

import { makeCards } from '@/shared'
import type { Item } from '@/types'

import { useCounterStore } from '@/stores/example'

import CardHeader from './CardHeader.vue'

const cards = reactive<Item[]>(makeCards(12))

const { count, inc, dec, reset } = useCounterStore()
</script>

<template>
  <div>
    <p>Example count store: {{ count }}</p>

    <div
      style="display: flex; flex-direction: row; align-items: center; gap: 4px"
    >
      <Button @click="inc">+1</Button>
      <Button @click="dec">-1</Button>
      <Button @click="reset">Reset</Button>
    </div>
  </div>

  <CardHeader :items="cards" />

  <div class="container">
    <Card
      style="max-width: 400px"
      v-for="({ title, description }, index) in cards"
      :key="index"
    >
      <template #header>
        <Image src="/img/wallpapper.jpg" alt="wallpapper" width="400" />
      </template>
      <template #title>{{ title }}</template>
      <template #content>{{ description }}</template>
      <template #footer>
        <Button>Перейти</Button>
      </template>
    </Card>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  width: 100%;
  gap: 12px;
  padding: 10px;
  margin: 0 auto;
}

@media (width < 500px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>
