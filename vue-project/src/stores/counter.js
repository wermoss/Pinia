
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
  getters: {
    oddOrEven: (state) => state.count % 2 === 0 ? 'even' : 'odd',
  }
})