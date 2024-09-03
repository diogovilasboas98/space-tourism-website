<script lang="ts" setup>
import { useTechnologies } from '../../pinia/technology';

import bgImgDesktop from '/assets/technology/background-technology-desktop.jpg'
import bgImgTablet from '/assets/technology/background-technology-tablet.jpg'
import bgImgMobile from '/assets/technology/background-technology-mobile.jpg'

import screenSize from '../../scripts/screensize';
import Layout from '../../components/layout.vue';
import { computed, ref } from 'vue';
import Stepper from '../../components/stepper.vue';
import TechnologyStepContent from './technologyStepContent.vue';

const store = useTechnologies()

const bgImg = computed(()=>{
    const imgs = {
        'desktop': bgImgDesktop,
        'tablet': bgImgTablet,
        'mobile': bgImgMobile
    } 
    
    let img:string|null = imgs[screenSize.value]

    return img;
})

const currStep = ref(0)
function updateCurrStep(step:number){
    currStep.value = step;
}

function getImage(url:string){
    return new URL('/assets/'+url, import.meta.url)
}

</script>
<template>
    <Layout :orderNumber="3" :title="'Space launch 101'" :screenSize :bgImg>
        <div class="technology" :class="screenSize">
            <Stepper class="technology-stepper" @updateStep="updateCurrStep" :size="store.data.length" :screenSize :currStep="currStep"></Stepper>
            <div class="technology-content">
                <Transition name="technology-content">
                    <TechnologyStepContent :key="'technology-step-'+currStep" :screenSize  :currStepData="store.data[currStep]"></TechnologyStepContent>
                </Transition>
            </div>
            <div class="technology-img">
                <Transition name="technology-content">
                    <img :key="'technology-step-image-'+currStep" :src="getImage(screenSize == 'desktop' ? store.data[currStep].images.portrait : store.data[currStep].images.landscape).href" :alt="store.data[currStep].name">
                </Transition>
            </div>
        </div>
    </Layout>
</template>

<style>
.technology{
    display: grid;
    grid-template-columns: 300px 1fr 1fr;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
}

.technology{
    display: grid;
    grid-template-columns: 250px 1fr 1fr;
    grid-template-areas: "stepper content img" ;
    justify-items: center;
    align-items: center;
    justify-content: space-between;
}

.technology.mobile,
.technology.tablet{
    grid-template-columns: 1fr;
    grid-template-areas: "img" "stepper" "content";
}

.technology .technology-img{
    height: 100%;
    justify-self: end;
    padding-bottom: 1rem;
}

.technology.mobile .technology-img,
.technology.tablet .technology-img{
    justify-self: center;
    margin-bottom: 1rem;
}

.technology .technology-img img{
    max-height: 500px;
    grid-area: img;
}

.technology.mobile .technology-img img,
.technology.tablet .technology-img img{
    width: 100dvw;
}

.technology .technology-stepper{
    grid-area: stepper;
    justify-self: end;
    margin-right: 2rem;
}

.technology.mobile .technology-stepper,
.technology.tablet .technology-stepper{
    justify-self: center;
}

.technology-content{
    grid-area: content;
}

.technology-content-enter-to{
    opacity: 1
}

.technology-content-enter-active{
    transition: all 1s ease-in-out;
}

.technology-content-enter-from{
    opacity:0;
}

.technology-content-leave-active{
    opacity: 0;
}
</style>