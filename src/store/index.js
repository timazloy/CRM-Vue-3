import auth from './auth'
import info from './info'

import { createStore } from 'vuex'

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
        auth, info
    }
})