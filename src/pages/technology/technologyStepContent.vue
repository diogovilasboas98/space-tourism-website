<script lang="ts" setup>
defineProps<{
    currStepData:{
        name: string;
        description: string;
    },
    screenSize: string
}>()
</script>
<template>
    <div class="technology-step-content" :class="screenSize">
        <div class="technology-step-content--terminology">The terminology ...</div>
        <div class="technology-step-content--name">{{ currStepData.name }}</div>
        <div class="technology-step-content--description">{{ currStepData.description }}</div>
    </div>
</template>
<style>
.technology-step-content .technology-step-content--terminology{
    font-size: 2rem;
    text-transform: uppercase;
    opacity: 0.25;
}

.technology-step-content .technology-step-content--name{
    font-size: 3.5rem;
    text-transform: uppercase;
}

.technology-step-content .technology-step-content--description{
    text-align: justify;
}

.technology-step-content.mobile,
.technology-step-content.tablet{
    text-align: center!important;
    padding: 1rem 5rem;
}

.technology-step-content.mobile{
    padding: 1rem 2rem;
}

.technology-step-content.mobile .technology-step-content--name{
    font-size: 2rem;
}

.technology-step-content.mobile .technology-step-content--terminology{
    font-size: 1.5rem;
}
</style>