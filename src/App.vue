<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue' 
import Router from 'vue-router'
import HomeScreen from './components/HomeScreen.vue'
import SignupBasicVue from './components/SignupBasic.vue';

Vue.use(Router);

//todo move to own file
const router =  new Router({  
routes: [
  {      
    path: '/',     
    name: 'HomeScreen',     
    component: HomeScreen
  },
  {      
    path: '/signup',     
    name: 'signup',     
    component: SignupBasicVue
  }
  ]
  });

  

export default {
  name: 'app',
  router: router,
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
