import { createApp } from 'vue'
import App from './App'
import router from "./router";
import store from './store'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAT_D1nADQfQpyBK3qzxjhdhZzV6nyeyB4",
    authDomain: "vue3-crm-33170.firebaseapp.com",
    databaseURL: "https://vue3-crm-33170-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue3-crm-33170",
    storageBucket: "vue3-crm-33170.appspot.com",
    messagingSenderId: "491182782434",
    appId: "1:491182782434:web:a651af3b4dc443677e6bbb",
    measurementId: "G-4X05Z15NC6"
};

firebase.initializeApp(firebaseConfig)


firebase.auth().onAuthStateChanged(() => {
    const app = createApp(App);
    app.use(router)
    app.use(store)
    app.mount('#app')
})