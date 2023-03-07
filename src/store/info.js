import firebase from 'firebase/compat/app';
import { getDatabase, ref, set, onValue } from "firebase/database";

export default {
    state: {
        info: {}
    },
    mutations: {
        setInfo(state, info) {
            state.info = info
        },
        clearInfo(state) {
          state.info = {}
        },
    },
    actions: {
      async fetchInfo({dispatch, commit}) {
          try {
              const uid = await dispatch('getUid')

              const db = getDatabase();
              const starCountRef = ref(db, `/users/${uid}/info`);

              onValue(starCountRef, (snapshot) => {
                  const data = {
                      name: snapshot.val().username,
                      bill: snapshot.val().bill
                  }
                  commit('setInfo', data)
              });
          } catch (e) {
              console.log(e)
          }

      }
    },
    getters: {
        info: s => s.info
    }
}
