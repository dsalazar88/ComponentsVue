<template>
<!-- /** 
* @Component cards with information
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/ --> 
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" >{{ title }}</h5>
            
            <p>{{ body }}</p>

            <button class="btn btn-outline-primary"
                @click="emit('changeFavorite', title)" >Favoritos</button>
        </div>
    </div>
</template>

<script setup>

defineProps({
    title: Number,
    id: Number,
    body: {
        type: String,
        default: "Sin descripcion",
    },
})

/**@constant {Events} - Declaration of emit events */
const emit = defineEmits(['changeFavorite'])
</script>
