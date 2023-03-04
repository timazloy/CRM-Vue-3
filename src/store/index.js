import auth from './auth'

// import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    state () {
        return {
            error: null,
        }
    },
    mutations: {
        setError(state, error) {
            state.error = error
        },
        clearError(state) {
            state.error = null
        }
    },
    getters: {
      error: s => s.error
    },
    modules: {
        auth
    }
})

// const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
// app.use(store)