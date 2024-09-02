<script lang="ts" setup>
import { computed } from 'vue';
import Navbar from './navbar.vue';

import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  bgImg:string;
  screenSize: 'mobile'| 'tablet' | 'desktop',
  orderNumber?: number
  title?: string
}>()

const orderNumberStr = computed(()=> `0${props.orderNumber} `)

</script>

<template>
    <div class="wrapper" :class="screenSize">
        <div @click="()=>router.push('/')" class="logo">
            <img width="32" src="../assets/shared/logo.svg">
        </div> 
        <hr v-if="screenSize == 'desktop'" class="spacer">
        <Navbar  :mobile="screenSize == 'mobile'" class="navbar"></Navbar>
        <div class="content">
            <div v-if="orderNumber && title" class="content-header">
                <b>{{ orderNumberStr }}</b>{{ title }}
            </div>
            <slot isLg isMd isSm :screenSize="screenSize"></slot>
        </div>
    </div>
    <img v-if="bgImg" class="bg-img" :src="bgImg">
</template>

<style scoped>
.wrapper{
    display:grid;
    grid-template-columns: 150px 1fr 50px 1.5fr;
    grid-template-areas: "logo . navbar navbar";
    grid-template-rows: 150px 1fr;
    overflow: auto;
    max-height: 100dvh;
}

.wrapper > .logo {
    grid-area: logo;
    margin: 50px;
    align-self: center;
    z-index: 2;
}

.wrapper > .logo:hover{
    cursor:pointer;
}

.wrapper > .spacer {
    grid-column: 2/ 4;
    grid-row: 1;
    width: 100%;
    z-index: 2;
    align-self: center;
}

.bg-img{
    width: 100dvw;
    height: 100dvh;
    position: absolute;
    z-index: -1;
    top:0;
}

.wrapper > .navbar{
    grid-area: navbar;
    align-self: center;
    z-index: 1;
}

.wrapper .content{
    grid-column: 1/ -1;
    grid-row: 1/3;
    align-self: start;
    padding-top: 150px;
    z-index: 0;
}

.wrapper.mobile .content{
    padding-top: 120px;
    padding-bottom: 100px;
}

.wrapper.tablet {
    grid-template-columns: 150px 1fr;
    grid-template-areas: "logo navbar";
}

.wrapper.mobile .navbar{
    justify-self: end;
    padding-right: 2rem;
    font-size: x-large;
}

.wrapper .content-header{
    font-size: 1.5rem;
    margin-left: 9rem;
    margin-top: 0;
    padding: 0;
    text-transform: uppercase;
    margin-bottom: 3rem;
}

.wrapper.tablet .content-header{
    margin-left: 3.5rem;
}

.wrapper.mobile .content-header{
    margin-left:0;
    text-align: center;
    font-size: 1rem;
}

.wrapper .content-header > b{
    opacity:0.25;
}
</style>