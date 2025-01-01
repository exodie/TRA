import { createMemoryHistory, createRouter } from 'vue-router'
import { routes } from '@/shared/configs'

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
