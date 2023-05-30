import {
	createApp
} from 'vue'
import {
	createPinia
} from 'pinia'
import App from './App.vue'

import router from './router'

import '@/assets/main.scss'

const pinia = createPinia();
const app = createApp(App);


app.config.globalProperties.isRouterAlive = true;


app.use(router);
app.use(pinia);

app.mount('#app')