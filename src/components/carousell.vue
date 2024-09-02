<script lang="ts" setup>
const emit = defineEmits(['changeCircleSelected'])
defineProps<{
  size: number,
  curr: number
}>();

function clickedCircle(size:number){
    emit('changeCircleSelected', size)
}
</script>
<template>
    <div class="carousell">
        <FontAwesomeIcon v-for="(_, index) in new Array(size)" @click="clickedCircle(index)" class="carousell--circle" :class="curr == index? 'selected': ''" :icon="['fa','circle']" ></FontAwesomeIcon>
    </div>
</template>
<style>
.carousell{
    display: flex;
    gap: 1.5rem;
    font-size: 0.75rem;
}

.carousell .carousell--circle{
    opacity: 0.25;
    transition: opacity 0.5s ease-in-out;
}

.carousell .carousell--circle.selected{
    opacity: 1;
}

.carousell .carousell--circle:hover{
    cursor:pointer;
    opacity: 0.50;
}
</style>