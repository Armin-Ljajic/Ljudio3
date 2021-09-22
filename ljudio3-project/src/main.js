import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(VueAxios,axios).use(router).use(store).mount('#app')
