import { createApp } from 'vue'
import App from '@/App.vue'
import '@/style.css'
import 'primeicons/primeicons.css'
import router from "@/router"
import "@fancyapps/ui/dist/fancybox/fancybox.css";


const app = createApp(App);
app.use(router);

app.mount("#app");
