<template>
<!-- /** 
* @Component button to increment counter
* @author Daniel Salazar <danielsalzar081@gmail.com>
*/ --> 
    <div>
        <h4>Counter: {{ counter }}</h4>
        <button @click="increment">Increment</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0)

const increment = () => counter.value ++
</script>
