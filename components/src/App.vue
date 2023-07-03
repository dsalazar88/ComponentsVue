<template>
<!-- /** 
* @Main component
* @author Daniel Salazar <danielsalzar081@gmail.com>
*/ --> 
  <div>
    <h1>APP</h1>
    <!-- <h4>{{ counter }}</h4> -->
    <ButtonCounter></ButtonCounter>
    <BlogSpot title="post 1" body="Description 1" colorText="primary"></BlogSpot>
  </div>
</template>

<script setup>
import ButtonCounter from './components/ButtonCounter.vue'
import BlogSpot from './components/BlogSpot.vue'
</script>

<style>

</style>