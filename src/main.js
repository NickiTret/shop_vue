import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import Meta from 'vue-meta';

// import './assets/main.css'

const app = createApp(App)



app.use(router)
app.use(Meta);
app.config.globalProperties.axios = axios
app.mount('#app')
