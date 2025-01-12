import { reactive } from 'vue'

// using simple reactive as state management
// TODO: for more advanced usage, it's better to use Pinia
// https://vuejs.org/guide/scaling-up/state-management.html#simple-state-management-with-reactivity-api


export const poker = reactive({
  count: 0,
  increment() {
    this.count++
  }
})
