<script lang="ts" setup>
const emit = defineEmits(['selectedTab'])
defineProps<{
    tabs: {
        name: string;
    }[],
    selected: string;
    screenSize: 'mobile'| 'desktop' | 'tablet'
}>()

function clickedTab(tab:{ name: string }) {
    emit('selectedTab', tab)
}
</script>
<template>
    <div class="tabs" :class="screenSize">
        <div class="tab" :class="tab.name == selected ? 'selected': ''" v-for="tab in tabs" :key="tab.name" @click="clickedTab(tab)">
            {{ tab.name }}
        </div>
    </div>
</template>
<style>
.tabs{
    display:flex;
    gap: 1rem;
    width:100%;
    min-height: 35px;
}

.tabs.mobile,
.tabs.tablet{
    justify-content: center;
}

.tabs > .tab:hover{
    cursor: pointer;
    border-bottom: 3px solid white;
    box-sizing: border-box;
}

.tabs > .tab.selected {
    border-bottom: 3px solid white;
}
</style>