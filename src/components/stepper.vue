<script lang="ts" setup>
const emit = defineEmits(['updateStep'])
defineProps<{
    size: number
    currStep: number;
    screenSize: 'mobile'| 'desktop' | 'tablet'
}>()

function updateStep(step:number){
    emit('updateStep',step)
}
</script>
<template>
    <div class="stepper" :class="screenSize">
        <div class="step" v-for="(_,index) in new Array(size)" @click="updateStep(index)" :class="currStep == index? 'selected':''" :key="'step-'+ index">
            {{ index + 1  }}
        </div>
    </div>
</template>
<style>
.stepper{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.stepper.mobile,
.stepper.tablet{
    flex-direction: row;
}

.stepper .step{
    font-size: 2rem;
    padding: 1rem;
    border-radius: 100%;
    border: 2px solid rgba(255,255,255,0.25);
    height: 5rem;
    width: 5rem;
    box-sizing: border-box;
    text-align: center;
    line-height: 2.5rem;
    transition: all 0.5s ease-in-out;
}

.stepper.mobile .step{
    font-size: 1rem;
    padding: 0.5rem;
    height: 2.5rem;
    width: 2.5rem;
    line-height: 1.25rem;
}

.stepper .step:hover{
    border: 2px solid rgba(255,255,255,1);
    cursor: pointer;
}

.stepper .step.selected{
    background-color: white;
    color: black;
}
</style>