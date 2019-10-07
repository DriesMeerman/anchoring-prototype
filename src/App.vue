<template>
  <div id="app">
    <HomeScreen></HomeScreen>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomeScreen from './components/HomeScreen.vue'

export default {
  name: 'app',
  components: {
    HomeScreen
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
