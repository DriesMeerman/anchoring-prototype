import Vue from 'vue' 
import Router from 'vue-router'
import HomeScreen from '../components/HomeScreen.vue'
import SignupBasicVue from '../components/SignupBasic.vue';


Vue.use(Router);

export default new Router({  
    routes: [
      {      
        path: '/',     
        name: 'Entry',     
        component: HomeScreen,
        props: {
          entry: true
        }
      },
      {      
        path: '/signup',     
        name: 'signup',     
        component: SignupBasicVue
      },
      {      
        path: '/home',     
        name: 'Home',     
        component: HomeScreen,
        beforeEnter: function (to, from, next) {
          if (!window.setPoints){ //bigbrain
            next('/');
            return;
          }
          next();
        }
      }
]});