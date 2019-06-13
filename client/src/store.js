import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: null
  },
  mutations: {
    setUser(state, payload) {
      state.userProfile = payload
    },
    logOut(state) {
      state.userProfile = null
    }
  },
  actions: {
    setUser(context, payload) {
      let id = payload.id
      axios
        .get(`${process.env.NODE_ENV === 'development' ? 
        'http://localhost:3000/getUser' : 
        'https://vue-authorization-api.seughton.now.sh/getUser'}`,
          {
            params: {
              id
            }
          })
        .then(response => response.data)
        .then(data => {
          context.commit('setUser', data)
        });
    },
    logOut(context) {
      context.commit('logOut')
    }
  },
});
