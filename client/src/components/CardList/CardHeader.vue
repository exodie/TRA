<script setup lang="ts">
import type { Item } from '@/types'
import { Button } from 'primevue'

defineProps<{
  items: Item[]
}>()
</script>

<template>
  <header class="container">
    <h2>Count of item: {{ items.length }}</h2>

    <ul class="list">
      <Button>filter</Button>
      <Button>filter</Button>
      <Button>filter</Button>
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

.count {
  font-size: 18px;
}

.list {
  display: flex;
  flex-direction: row;
  align-items: center;

  column-gap: 8px;
}
</style>
