<template>
  <!-- /** 
* @Main component
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/ -->
  <LoadingSpinner v-if="loading"></LoadingSpinner>

  <div class="container" v-else>

    <h1>APP</h1>

    <!-- /**@call button counter component */ -->
    <ButtonCounter></ButtonCounter>

    <h2>Mis post favoritos: {{ favorite }}</h2>

    <!-- /**@call paginate post component */ -->
    <PaginatePost class="mb-2" @nextPage="nextPage" @prevPage="prevPage" :start="start" :end="end" :length="posts.length">
    </PaginatePost>

    <!-- /**@call cards component */ -->
    <BlogSpot v-for="item in posts.slice(start, end)" :title="item.id" :body="item.body" @changeFavorite="changeFavorite"
      class="mb-2"></BlogSpot>

  </div>
</template>

<script setup>
import ButtonCounter from './components/ButtonCounter.vue'
import BlogSpot from './components/BlogSpot.vue'
import PaginatePost from './components/PaginatePost.vue';
import LoadingSpinner from './components/LoadingSpinner.vue'
import { ref, onMounted } from 'vue';
import { App } from './components/js/App';

const favorite = ref('')
const posts = ref([])
const post_per_page = 10
const start = ref(0)
const end = ref(post_per_page)
const loading = ref(true)

/**@constant {Arrow Function} - Change the title of favorite post */
const changeFavorite = (title) => {
  favorite.value = title
}

/**@constant {Arrow Function} - Call to getPost in App.js and show the icon loading */
const getPost = async () => {
  posts.value =  await App.getPost()
  setTimeout(() => {
    loading.value = false
  }, 1000)
}

/**@constant {Arrow Function} - go to the next page */
const nextPage = () => {
  start.value += post_per_page
  end.value += post_per_page
}

/**@constant {Arrow Function} - returns to previous page*/
const prevPage = () => {
  start.value += - post_per_page
  end.value += - post_per_page
}

/**@function {} - Execute getPost when the page is charged */
onMounted(getPost)

</script>
