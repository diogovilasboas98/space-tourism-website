<script lang="ts" setup>
defineProps<{
    tab: {
        name: string,
        description: string,
        travel:string,
        distance:string,
    },
    screenSize: 'mobile' | 'tablet' | 'desktop'
}>()
</script>
<template>
    <div class="destination-tab" :class="screenSize">
        <p class="destination-tab--title">  
            {{ tab.name }}
        </p>
        <p class="destination-tab--description">  
            {{ tab.description }}
        </p>
        <hr  style="margin: 40px 0">
        <div class="destination-tab--info">
            <div class="destination-tab--info-distance">
                <p class="title">
                    Avg. distance
                </p>
                <p class="content">
                    {{ tab.distance }}
                </p>
            </div>
            <div class="destination-tab--info-time">
                <p class="title">
                    Est. travel time
                </p>
                <p class="content">
                    {{ tab.travel }}
                </p>
            </div>
        </div>
    </div>
</template>

<style>
.destination-tab .destination-tab--title{
    font-size: 4.5rem;
    padding: 0;
    margin: 0;
}

.destination-tab .destination-tab--description{
    font-size: 1rem;
    max-width: 450px;
    text-align: justify;
}

.destination-tab.mobile .destination-tab--description,
.destination-tab.tablet .destination-tab--description{
    text-align: center;
}

.destination-tab--info{
    display: flex;
    gap: 4rem;
}

.destination-tab.mobile .destination-tab--info{
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
}

.destination-tab--info .destination-tab--info-distance{
    flex-grow: 1;
}

.destination-tab--info .destination-tab--info-time{
    flex-grow: 1;
}

.destination-tab--info .title{
    margin:0;
    font-size: 1rem;
}

.destination-tab--info .content{
    font-size: 2rem;
    margin: 5px 0;
}
</style>