<template>
    <div>
        <img id="logo" :src="require('./../assets/logo.png')">
        <h1>Welcome</h1>
        <div class="tile-container">
            <div class="d-container">
                <div class="d-row">
                    <SimpleTile class="tile col-md-6"
                                image="https://i.imgur.com/WEYAiGu.jpg"
                                topText="memer"
                                bottomText="200"></SimpleTile>
                    <SimpleTile class="tile col-md-6"
                                image="https://i.imgur.com/Sfv8yEP.jpg"
                                topText="Formula 1"
                                bottomText="1500"></SimpleTile>
                </div>

                <div class="d-row">
                    <SimpleTile class="tile col-md-6"
                                image="https://i.imgur.com/uIEexIc.jpg"
                                topText="Vaporwave"
                                bottomText="50"></SimpleTile>
                    <SimpleTile class="tile col-md-6"
                                image="https://i.imgur.com/XkI2bc6.jpg?1"
                                topText="Pepsi"
                                bottomText="80"></SimpleTile>
                </div>
            </div>
            
            <div class="login-holder">
                <button v-on:click="openRegistration" class="btn btn-primary">Register</button>
            </div>
            
        </div>
    </div>
</template>

<script>
import SimpleTile from './SimpleTile.vue';
import Router from 'vue-router'

export default {
  name: 'HomeScreen',
  props: {},
  methods: {
      openRegistration: function(evt){
          this.$router.push({
              name: 'signup'
          })
      }
  },
  components: {
    SimpleTile
  }
}
</script>

<style lang="stylus" scoped>
    #logo{
        max-width: 100%;   
        height: 6rem;
    }
    .tile-container{
        display: flex;
        flex-wrap: wrap;

    }
    .d-container{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .d-row{
        display: flex;
        flex-direction: row;
        margin: auto 0.4rem;
    }
    .tile {
        flex: 50%;
        margin: 0.2rem;
        height: 210px;
        box-shadow: 0px 1px 2px 1px #0000002e;
    }
    .login-holder{
        display: flex;
        margin: 1rem 2rem;
        width: 100%;
    }
    .login-holder > button {
        width: 100%;
    }
</style>