<template>
    <div>
        <img id="logo" :src="require('./../assets/logo.png')" v-on:click="redirectHome">
        <h3 v-if="entry">Welcome</h3>
        <div v-if="!entry">
            <h3>Registration Success</h3>
            <h4 >{{getPoints()}} Points</h4>
        </div>
        <div v-if="entry" class="text-message">
                By using this app you gather points by providing information on yourself and your public transportation travels.
                Here are a few examples of things you can purchase with your points:
        </div>
        <div class="tile-container">
            <div class="d-container">
                <div class="d-row" v-for="row in tiles">
                    <SimpleTile v-for="tile in row"
                                class="tile col-md-6"
                                :image="tile.imageUrl"
                                :topText="tile.topText"
                                :bottomText="tile.bottomText"></SimpleTile>
                </div>
            </div>

            <div v-if="entry" class="text-message w-100">
                Click register to sign up and receive your first {{signupPoints}}
            </div>
            
            <div class="login-holder" v-if="entry">
                <button v-on:click="openRegistration" class="btn btn-primary">Register</button>
            </div>
            
        </div>
    </div>
</template>

<script>
import SimpleTile from './SimpleTile.vue';
import Router from 'vue-router'
import tiles from '../data/tileData';

export default {
  name: 'HomeScreen',
  props: {
      entry: Boolean
  },
  data() {
      return {
          tiles: tiles
      }
  },
  computed: {
      signupPoints: function() {return this.$root.$data.signupPoints}
  },
  methods: {
      openRegistration: function(evt){
          this.$router.push({
              name: 'signup'
          })
      },
      getPoints(){
          return this.$root.$data.sharedState.points
      },
      redirectHome(){
          if(this.$router.currentRoute.name !== 'Entry'){
                this.$router.push({
                    name: 'Entry'
                });
          }
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
        height: 5rem;
    }

    .text-message{
        font-size: 90%;
        /* opacity: 0.7; */
        margin: 0.8rem 0.2rem;
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
        justify-content: center;
    }
    .tile {
        flex: 50%;
        margin: 0.2rem;
        height: 210px;
        box-shadow: 0px 1px 2px 1px #0000002e;
        max-width: 300px;
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