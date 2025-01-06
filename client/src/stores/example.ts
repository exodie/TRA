import { defineStore } from 'pinia'

export const useCounterStore = defineStore('exampleCounter', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    inc() {
      this.count++
    },
    dec() {
      if (this.count <= 0) return

      this.count--
    },
    reset() {
      this.count = 0
    },
  },
})
