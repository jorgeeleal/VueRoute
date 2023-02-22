<script setup>
import {useCounterStore} from '@/store/counter.js'
import { storeToRefs } from 'pinia';
//---------------------------------------------------------

const useCounter = useCounterStore();
const {increment} = useCounter;
const {count} = storeToRefs(useCounter);

</script>

<template>
  <h1>Práctica con Pinia</h1>
  <p>
    counter: {{ count }} //-- useCounterStore
  </p>
  <button @click="increment">Increment</button>
</template>
