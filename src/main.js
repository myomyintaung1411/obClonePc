import { createApp } from 'vue'
import './style.css'
import router from './routes.js'
import App from './App.vue'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';


const app = createApp(App)
app.use(router)
app.use(VCalendar, {})
app.mount('#app')