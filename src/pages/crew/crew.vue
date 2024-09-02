<script lang="ts" setup>
import { useCrew } from '../../pinia/crew';

import bgImgDesktop from '../../assets/crew/background-crew-desktop.jpg'
import bgImgTablet from '../../assets/crew/background-crew-tablet.jpg'
import bgImgMobile from '../../assets/crew/background-crew-mobile.jpg'

const store = useCrew()
import Layout from '../../components/layout.vue';
import screenSize from '../../scripts/screensize';
import { computed, ref } from 'vue';
import Carousell from '../../components/carousell.vue';
import CrewCarousellContent from './crewCarousellContent.vue';

const bgImg = computed(()=>{
    const imgs = {
        'desktop': bgImgDesktop,
        'tablet': bgImgTablet,
        'mobile': bgImgMobile
    } 
    
    let img:string|null = imgs[screenSize.value]

    return img;
})

const currSlide = ref(0)

function updateSlide(newCurr:number){
    currSlide.value = newCurr;
}

function getImage(url:string){
    return new URL('../../assets/'+url, import.meta.url)
}
</script>

<template>
    <Layout :orderNumber="2" :title="'Meet your team'" :bgImg :screenSize>
        <div class="crew" :class="screenSize">
            <div class="crew-img">
                <Transition name="crew-slide-content">
                    <img :key="'crew-slide-content-img-' + currSlide" :src="getImage(store.data[currSlide]?.images.png).href" :alt="store.data[currSlide].name">
                </Transition>
            </div>
            <Transition name="crew-slide-content">
                <CrewCarousellContent :key="'crew-slide-content-' + currSlide" class="crew-content" :screenSize :currSlideInfo="store.data[currSlide]"></CrewCarousellContent>
            </Transition>
            <Carousell class="crew-carousell" @changeCircleSelected="updateSlide" :curr="currSlide" :size="store.data.length ?? 1"></Carousell>
        </div>
    </Layout>
</template>

<style>

.crew {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "content img" "carousell img";
}

.crew.mobile,
.crew.tablet{
    grid-template-columns: 1fr;
    grid-template-areas: "title" "content" "carousell" "img";
    justify-items: center;
}

.crew .crew-title{
    font-size: 2rem;
    margin-left: 3rem;
    margin-top: 0;
    padding: 0;
    grid-area: title;
}

.crew.tablet .crew-title{
    justify-self: start;
    margin:0;
}

.crew.mobile .crew-title{
    margin:0;
}

.crew .crew-title > b{
    opacity:0.25;
}

.crew .crew-img{
    grid-area: img;
    justify-self: center;
    display: flex;
    align-self: center;
}

.crew .crew-img img{
    height: 500px;
}

.crew.mobile .crew-img img{
    height: 350px;
}

.crew .crew-content{
    margin-top: 50px;
    grid-area: content;
    margin-left: 9rem;
}

.crew.tablet .crew-content{
    margin-left:0;
}

.crew.mobile .crew-content{
    margin-top: 20px;
}

.crew .crew-carousell{
    margin-left: 9rem;
    grid-area: carousell;
}

.crew.mobile .crew-carousell,
.crew.tablet .crew-carousell{
    margin: 0;
    margin-bottom: 50px;
    align-self: end;
}

.crew.mobile .crew-carousell{
    margin-bottom: 20px;
}

.crew-slide-content-enter-to{
    opacity: 1
}

.crew-slide-content-enter-active{
    transition: all 1s ease-in-out;
}

.crew-slide-content-leave-active{
    opacity: 0;
}

.crew-slide-content-enter-from{
    opacity:0;
}
</style>