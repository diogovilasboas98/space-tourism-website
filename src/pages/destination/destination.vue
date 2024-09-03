<script lang="ts" setup>
import { computed } from 'vue';
import { useDestinations } from '../../pinia/destinations';

import bgImgDesktop from '/assets/destination/background-destination-desktop.jpg'
import bgImgTablet from '/assets/destination/background-destination-tablet.jpg'
import bgImgMobile from '/assets/destination/background-destination-mobile.jpg'

import screenSize from '../../scripts/screensize';

import Tabs from '../../components/tabs.vue'
import Layout from '../../components/layout.vue';
import DestinationTabContent from './destinationTabContent.vue'


const store = useDestinations()

const bgImg = computed(()=>{
    const imgs = {
        'desktop': bgImgDesktop,
        'tablet': bgImgTablet,
        'mobile': bgImgMobile
    } 
    
    let img:string|null = imgs[screenSize.value]

    return img;
})

function updateSelected(tab: any){
    store.setSelected(tab)
}

function getImage(url:string){
    return new URL('/assets/'+url, import.meta.url)
}
</script>
<template>
    <Layout :orderNumber="1" :title="'Pick your destination'" :screenSize :bgImg>
        <div class="destination" :class="screenSize">
            <div class="destination-content">
                <div class="destination-left-content">
                    <Transition name="tab-content-transition">
                        <img width="300" :key="'destination-tab-content-img-'+store.selected.name" :src="getImage(store.selected.images.png).href" :alt="store.selected.name">
                    </Transition>
                </div>
                <div class="destination-right-content">
                    <Tabs :screenSize :selected="store.selected.name" @selectedTab="updateSelected" :tabs="store.data"/>
                    <Transition name="tab-content-transition">
                        <DestinationTabContent :screenSize :key="'destination-tab-content-'+store.selected.name" :tab="store.selected"/>
                    </Transition>
                </div>
            </div>
        </div>
    </Layout>
</template>
<style>
.destination .destination-title{
    font-size: 2rem;
    margin-left: 3rem;
    margin-top: 0;
    padding: 0;
}

.destination.mobile .destination-title{
    text-align: center;
    font-size: 1.2rem;
    margin-left: 0;
}

.destination.tablet .destination-title{
    margin-left: 0;
}
.destination .destination-title > b{
    opacity:0.25;
}

.destination .destination-content{
    display:grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    max-height: 100dvh;
    padding-bottom: 2rem;
}

.destination.mobile .destination-content,
.destination.tablet .destination-content{
    grid-template-columns: 1fr;
}

.destination .destination-content .destination-left-content{
    margin-top: 4rem;
}

.destination.mobile .destination-content .destination-left-content,
.destination.tablet .destination-content .destination-left-content{
    margin-top: 0;
    margin-bottom: 2rem;
}

.destination.tablet .destination-content .destination-left-content img{
    width: 200px;
}

.destination.mobile .destination-content .destination-left-content img{
    width: 100px;
}

.destination .destination-content .destination-right-content{
    justify-self: self-start;
    font-size: larger;
}

.destination .destination-content .destination-right-content {
    text-align: center;
    justify-self: center;
}

.tab-content-transition-enter-to{
    opacity: 1
}

.tab-content-transition-enter-active{
    transition: all 1s ease-in-out;
}

.tab-content-transition-enter-from{
    opacity:0;
}

.tab-content-transition-leave-active{
    opacity: 0;
}
</style>