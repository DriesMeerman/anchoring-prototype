<template>
    <div>
        <img id="logo" :src="require('./../assets/logo.png')">
        <h1>Welcome</h1>
        <div class="tile-container">
            <div class="d-container">
                <div class="d-row">
                    <SimpleTile class="tile col-md-6"
                                image="https://i.imgur.com/FQTPXy6.jpg"
                                topText="Zalando Giftcard"
                                bottomText="15 euro + 2100 points"></SimpleTile>
                    <SimpleTile class="tile col-md-6"
                                image="https://i.imgur.com/pUCycXK.png"
                                topText="Dolfinarium"
                                bottomText="10 euro + 700 points"></SimpleTile>
                </div>

                <div class="d-row">
                    <SimpleTile class="tile col-md-6"
                                image="https://i.imgur.com/8UvxDbt.jpg"
                                topText="Koffie Giftcard"
                                bottomText="2200 points"></SimpleTile>
                    <SimpleTile class="tile col-md-6"
                                image="https://i.imgur.com/t4CJfXl.jpg"
                                topText="Pathe Voucher"
                                bottomText="7 euro + 400 points"></SimpleTile>
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