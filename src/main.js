import { createApp } from 'vue/dist/vue.esm-bundler.js'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

const app = createApp(App); 

app.use(router);


axios.defaults.baseURL = 'http://172.21.0.3:8082'; 

app.config.globalProperties.$axios = axios;

app.mount('#app');