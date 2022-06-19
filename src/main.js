import { createApp } from 'vue'
import App from './App.vue'
import route from './router/router'
import styles from'./assets/styles/style.scss'
createApp(App).use(route).mount('#app')
