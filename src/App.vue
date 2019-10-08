<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue' 
import routes from './routes/index';

const ConfigA = require('./data/configurationA');
const ConfigB = require('./data/configurationB');

const VERSIONS = {
  A: 'a',
  B: 'b'
}

/**
 * @param {string} version
 * @returns {object}
 */
function getConfig(version){
  switch (version){
    case VERSIONS.A:
      return ConfigA;
    case VERSIONS.B:
      return ConfigB;
    default:
      return ConfigA;
  }
}
  


export default {
  name: 'app',
  router: routes,
  mounted: function() {
    const version = this.$route.query.version
    const config = getConfig(version);
    let sharedState = this.$root.$data.sharedState;
    
    sharedState.questions = config.questions;
    sharedState.signupBonus = config.signupBonus;
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
