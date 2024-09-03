<script lang="ts" setup>
import Layout from '../../components/layout.vue';
import bgImgDesktop from "/assets/home/background-home-desktop.jpg"
import bgImgTablet from "/assets/home/background-home-tablet.jpg"
import bgImgMobile from "/assets/home/background-home-mobile.jpg"
import screenSize from '../../scripts/screensize';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const bgImg = computed(()=>{
    const imgs = {
        'desktop': bgImgDesktop,
        'tablet': bgImgTablet,
        'mobile': bgImgMobile
    } 
    
    let img:string|null = imgs[screenSize.value]

    return img;
})

const goToDestinations = ()=>{
    router.push('/destination')
}
</script>
<template>
    <Layout :bgImg="bgImg" :screenSize="screenSize" #default="{screenSize}">
        <div class="homepage" :class="screenSize">
            <section class="homepage--left-content">
                <p class="top">So, you want to travel to</p>
                <p class="middle">Space</p>
                <p class="bottom">Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!</p>
            </section>
            <section class="homepage--right-content">
                <div @click="goToDestinations" class="explore">
                    <span>Explore</span>
                </div>
            </section>
        </div>
    </Layout>
</template>
<style>
.homepage{
    display: flex;
    align-items: end;
    min-height: 60dvh;
    margin: 6rem;
    margin-bottom: 0;
}

.homepage.tablet,
.homepage.mobile{
    flex-direction: column;
    align-items: center;
}

.homepage .homepage--left-content{
    max-width: 500px;
    text-align: center;
    padding-bottom: 25px;
}

.homepage .homepage--left-content .top{
    font-size: 25px;
    margin:0;
}

.homepage .homepage--left-content .middle{
    font-size: 100px;
    margin:0;
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 0;
    line-height: 1;
}

.homepage .homepage--left-content .bottom{
    font-size: medium;
}

.homepage .homepage--right-content{
    display: flex;
    justify-content: end;
    align-self: center;
    height: 100%;
    width: 100%;
    align-items: center;
}

.homepage.mobile .homepage--right-content,
.homepage.tablet .homepage--right-content{
    justify-content: center;
}

.homepage .homepage--right-content .explore{
    font-size: 25px;
    color: black;
    background-color: white;
    height: 200px;
    width: 200px;
    min-width: 200px;
    min-height: 200px;
    display: grid;
    align-items: center;
    justify-items: center;
    border-radius: 100%;
    transition: all 1s ease-in-out;
}

.homepage .homepage--right-content .explore span{
    z-index: 2;
    grid-column: 1/-1;
    grid-row: 1/-1;
}

.homepage .homepage--right-content .explore::after{
    width:200px;
    height: 200px;
    background-color: rgba(255,255,255,0.4);
    content: "";
    grid-column: 1/-1;
    grid-row: 1/-1;
    z-index: 0;
    border-radius: 100%;
    transition: all 1s ease-in-out;
}

.homepage .homepage--right-content .explore:active::after,
.homepage .homepage--right-content .explore:hover::after{
    transform: scale(1.7);
}

.homepage .homepage--right-content .explore:active,
.homepage .homepage--right-content .explore:hover{
    cursor:pointer;
    transform: scale(0.7);
}
</style>