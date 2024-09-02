import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faXmark, faCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faBars,faXmark,faCircle)

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
