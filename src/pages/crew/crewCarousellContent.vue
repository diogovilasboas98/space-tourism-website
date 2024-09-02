<script lang="ts" setup>
defineProps<{
    currSlideInfo: {
        bio:string;
        name:string;
        role:string;
    },
    screenSize: 'mobile' | 'tablet' | 'desktop'
}>()
</script>
<template>
    <div class="crew-carousell--content" :class="screenSize">
        <p class="crew-carousell--content--role">  
            {{ currSlideInfo.role }}
        </p>
        <p class="crew-carousell--content--name">  
            {{ currSlideInfo.name }}
        </p>
        <p class="crew-carousell--content--description">  
            {{ currSlideInfo.bio }}
        </p>
    </div>
</template>

<style>
.crew-carousell--content{
    margin: 3rem;
    max-width: 500px;
    min-height: 250px;
}

.crew-carousell--content.mobile,
.crew-carousell--content.tablet{
    margin:0;
    text-align: center;
    min-height: 250px;
}

.crew-carousell--content .crew-carousell--content--role{
    font-size: 1.5rem;
    font-weight: 400;
    opacity: 0.25;
    margin: 0;
    padding: 0;
}

.crew-carousell--content .crew-carousell--content--name{
    font-size: 2.7rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
}

</style>