import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.config = { 
  devGoogleURL : 'http://localhost:3000/auth/google',
  prodGoogleURL : 'https://vue-authorization-api.seughton.now.sh/auth/google',
  prodURL : 'https://vue-authorization-api.seughton.now.sh/getUser',
  devURL : 'http://localhost:3000/getUser'
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
