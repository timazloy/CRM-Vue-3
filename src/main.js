import { createApp } from 'vue'
import App from './App'
import router from "./router";
import useVuelidate from "@vuelidate/core";

const app = createApp(App);


app.use(router)
app.use(useVuelidate)
app.mount('#app')

