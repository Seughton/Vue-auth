import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Profile from './components/Profile.vue'

Vue.use(Router);
let getUser = localStorage.getItem('user')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'home',
      component: Home,
      // beforeEnter: (to,from,next) => {
      //   next()
      // }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      // beforeEnter: (to,from,next) => {
      //   if(!getUser) {
      //     next('/')
      //   }else {
      //     next()
      //   }
      // }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
});
