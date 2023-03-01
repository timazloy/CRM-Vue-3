import auth from './auth'

// import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {

    },
    modules: {
        auth
    }
})

// const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
// app.use(store)