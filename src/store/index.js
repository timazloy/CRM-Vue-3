import auth from './auth'
import info from './info'

import { createStore } from 'vuex'
import login from "@/views/Login";

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
    actions: {
        async fetchCurrency() {
            const key = process.env.VUE_APP_FIXER

            const myHeaders = new Headers();
            myHeaders.append("apikey", key);

            const requestOptions = {
                method: 'GET',
                headers: myHeaders
            };

            const res = await fetch("https://api.apilayer.com/fixer/latest?symbols=USD,EUR,RUB", requestOptions)
            const json = await res.json()

            return json
        }
    },
    getters: {
      error: s => s.error
    },
    modules: {
        auth, info
    }
})
