<template>
<!-- /** 
* @Component button to increment counter
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/ --> 
    <div>
        <h4>Counter: {{ counter }}</h4>
        <button @click="increment">Increment</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

/**@constant {int} */
const counter = ref(0)

/** Brief increment counter */
const increment = () => counter.value ++
</script>
