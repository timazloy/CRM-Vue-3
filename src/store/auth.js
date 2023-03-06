import firebase from 'firebase/compat/app';
import 'firebase/database'
import { getDatabase, ref, set } from "firebase/database";
import { getAuth } from "firebase/auth";

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
        async getUid() {
            const auth = getAuth();
            const user = auth.currentUser;

            return user ? user.uid : null
        },
        async register({dispatch, commit}, {email, password, name}) {
            try {

                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                const db = await getDatabase()
                await set(ref(db, `/users/${uid}/info`
                ), {
                    username: name,
                    bill: 100000,
                });
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },

        async logout({commit}) {
          await firebase.auth().signOut()
          commit('clearInfo')
        },
    }
}
