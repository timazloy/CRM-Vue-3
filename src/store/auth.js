import firebase from 'firebase/compat/app';
import 'firebase/database'
import { getDatabase, ref, set } from "firebase/database";

export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        async register({dispatch, commit}, {email, password, name}) {
            try {
                const db = getDatabase()
                const uid = await dispatch('getUid')

                await firebase.auth().createUserWithEmailAndPassword(email, password)
                await set(ref(db, `/users${uid}/info`
                ), {
                    username: name,
                    bill: 100000,
                });
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout({commit}) {
          await firebase.auth().signOut()
          commit('clearInfo')
        },
    }
}
