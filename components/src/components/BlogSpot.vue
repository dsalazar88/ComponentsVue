<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title" :class="`text-${colorText}`">{{ title }}</h5>
            <p>{{ body }}</p>
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
</script>

<style lang="scss" scoped>

</style>