<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

defineProps<{
  mobile:Boolean;
}>()

const router = useRouter()
const route = useRoute()

const sideMenuOpen = ref(false)


const menus = [{
    label:'Home',
    route: '/',
    selected: false
}, {
    label:'Destination',
    route: '/destination',
    selected: false
},{
    label:'Crew',
    route: '/crew',
    selected: false
},{
    label:'Technology',
    route: '/technology',
    selected: false
}]

const selectedMenu = menus.find(menu => {
    return menu.route == route.path 
})

if(selectedMenu){
    selectedMenu.selected = true
}

const goToRoute = ({ route }: { route: string; })=>{
    router.push(route as string)
}
</script>

<template>
    <div v-if="!mobile" class="menus">
        <div class="menu" :class="menu.selected ? 'selected' : ''" v-for="(menu, index) in menus" :key="`navbar-menu-${index}`" @click="goToRoute(menu)">
            <b>0{{index}}</b> - {{ menu.label }}
        </div>
    </div>
    <div class="side-navbar--wrapper" v-else>
        <div class="side-navbar--open-btn" @click="sideMenuOpen=true">
            <FontAwesomeIcon :icon="['fa', 'bars']" />
        </div>
        <Transition  name="side-navbar">
            <div class="side-navbar--content" v-if="sideMenuOpen">
                <div class="side-navbar--close-btn" @click="sideMenuOpen=false">
                    <FontAwesomeIcon :icon="['fa', 'xmark']" />
                </div>
                <div class="side-navbar--menu-list">
                    <div class="menu" :class="menu.selected ? 'selected' : ''" v-for="(menu, index) in menus" :key="`side-navbar-menu-${index}`" @click="goToRoute(menu)">
                        <b>0{{index}}</b> - {{ menu.label }}
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.menus{
    display: flex;
    gap: 1rem;
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.05);
    width: 100%;
    min-width: 500px;
    justify-items: center;
    padding-left: 5dvw;
    padding-right: 2.5dvw;
    box-sizing: border-box;
    height: 105px;
    justify-content: end;
}

.menus > .menu {
    display: flex;
    width: fit-content;
    min-height: 100px;
    align-items: center;
    justify-content: center;
    margin-bottom: 3px;
    padding-right: 10px;
    padding-left: 10px;
}

.menus > .menu:hover{
    cursor: pointer;
    border-bottom: 3px solid rgb(255,255,255);
}

.menus > .menu.selected{
    border-bottom: 3px solid rgb(255,255,255);
}

.side-navbar--content{
    position:absolute;
    right: 0;
    top:0;
    width: 70dvw;
    max-width: 300px;
    height: 100dvh;
    backdrop-filter: blur(20px);
    z-index: 3;
    box-sizing: border-box;
}

.side-navbar--open-btn{
    width: 100%;
    height: 100%;
}

.side-navbar--close-btn{
    display: flex;
    align-items: center;
    height: 100px;
    justify-content: end;
    padding: 30px;
    box-sizing: border-box;
}

.side-navbar--open-btn:hover{
    cursor:pointer;
}

.side-navbar--close-btn:hover{
    cursor:pointer;
}

.side-navbar--menu-list{
    padding-top: 50px;
    padding-left: 30px;
    padding-right: 5px;
}

.side-navbar--menu-list .menu{
    font-size: medium;
    margin-bottom: 10px;
    width: 100%;
}

.side-navbar--menu-list .menu:hover{
    border-right: 3px solid white;
    cursor: pointer;
}

.side-navbar--menu-list .menu.selected{
    border-right: 3px solid white;
}

.side-navbar-leave-to,
.side-navbar-enter-from{
    transform: translateX(500px);
    transition: all 0.5s ease-in-out;
}

.side-navbar-enter-active,
.side-navbar-leave-active{
    transition: all 0.5s ease-in-out;
}

.side-navbar-enter-to,
.side-navbar-leave-from{
    transform: translateX(0);
    transition: all 0.5s ease-in-out;
}
</style>