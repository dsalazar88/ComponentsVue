<template>
<!-- /** 
* @Component cards with information
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/ --> 
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" :class="`text-${colorText}`">{{ title }}</h5>
            
            <p>{{ body }}</p>

            <button class="btn btn-outline-primary"
                @click="emit('changeFavorite', title)" >Favoritos</button>
        </div>
    </div>
</template>

<script setup>

defineProps({
    title: String,
    id: Number,
    body: {
        type: String,
        default: "Sin descripcion",
    },
    colorText:String
})

const emit = defineEmits(['changeFavorite'])
</script>
