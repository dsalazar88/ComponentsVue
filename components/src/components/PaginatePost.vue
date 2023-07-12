<template>
<!-- /** 
* @Paginates post component
* @author Daniel Salazar <danielsalzar081@gmail.com>
* @copyright Daniel Salazar 2023
*/ --> 
    <div class="btn-group" role="group" aria-label="Basic Example">
        <button type="button" class="btn btn-outline-primary"
            @click="emit('prevPage')"
            :disabled="start ? false : true">Previous</button>

        <button type="button" class="btn btn-outline-primary"
            @click="emit('nextPage')"
            :disabled="end >= length">Next</button>
    </div>
</template>


<script setup>

/**@constant {Events} - Declaration of emit events */
const emit = defineEmits(['nextPage', 'prevPage'])

defineProps({
    start: Number,
    end: Number,
    length: Number
})

</script>