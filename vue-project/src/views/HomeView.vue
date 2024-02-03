<template>
  <div class="home">
    <div class="count">
      {{ storeCounter.count }}
    </div>
    <div class="buttons">
      <button @click="storeCounter.decrement">-</button>
      <button @click="storeCounter.increment">+</button>
    </div>
    <hr>
    <div>
      <p>Licznik jest {{ storeCounter.oddOrEven }}</p>
    </div>
  </div>
</template>
<script setup>

import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()


</script>

<style>
.count {
  font-size: 100px;
}
button {
  font-size: 40px;
  margin: 10px;
  min-width: 50px;
}
</style>