import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userProfile: null
  },
  mutations: {
    setUser(state,payload) {
      state.userProfile = payload
    },
    logOut(state){
      state.userProfile = null
    }
  },
  actions: {
    setUser(context, payload) {
      context.commit('setUser',payload)
    },
    logOut(context){
      console.log('LOGOUT')
      context.commit('logOut')
    }
  },
});
