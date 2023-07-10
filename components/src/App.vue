<template>
<!-- /** 
* @Main component
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/ --> 
  <div>
    <h1>APP</h1>

    <!-- /**@call button counter component */ -->
    <ButtonCounter></ButtonCounter>

    <h2>Mis post favoritos: {{ favorite }}</h2>
    
    <!-- /**@call cards component */ -->
    <BlogSpot v-for="item in items" :title="item.id" :body="item.body" :colorText="item.colorText" 
      @changeFavorite="changeFavorite"></BlogSpot>

  </div>
</template>

<script setup>
import ButtonCounter from './components/ButtonCounter.vue'
import BlogSpot from './components/BlogSpot.vue'
import { ref } from 'vue';

/** @constant {array} */
const items = ref ([
  { title: "post 1", id: "1", body: "description 1", colorText: "primary"},
  { title: "post 2", id: "2", body: "description 2", colorText: "secondary"},
  { title: "post 3", id: "3", body: "description 3", colorText: "warning"},
])

/** @constant {string} */
const favorite = ref('')

/** 
* Change favorite title
* @param {string} title - Change favorite title.
*/
const changeFavorite = (title) => {
  favorite.value = title
}

</script>

<style>

</style>