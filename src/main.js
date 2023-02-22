// import App from './App.vue'
// import 'materialize-css/dist/js/materialize.min'
// import router from "@/router";
// import Vue from "vue";
//
// // createApp(App).mount('#app')
//
// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app')

import { createApp } from 'vue'
import App from './App'
import router from "./router";

const app = createApp(App);

app.use(router)
app.mount('#app')

