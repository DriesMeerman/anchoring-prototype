<template>
    <div class="tile-container"> 
        
            <div class="text-wrapper">
                <div>{{topText}}</div>
            </div>

            <div class="tile-img" :style="cssProps">

            </div>
        
            <div class="text-wrapper">
                <div>{{bottomText}}</div>
            </div>
        
    </div>
    <!-- <div class="tile-container" :style="cssProps"> 
        <div class="tile-text">
            <div class="text-wrapper">
                <div>{{topText}}</div>
            </div>
            <div class="text-wrapper">
                <div>{{bottomText}}</div>
            </div>
        </div>
    </div> -->
</template>

<script>
export default {
  name: 'SimpleTile',
  props: {
      image: String,
      topText: String,
      bottomText: String
  },
  computed: {
      cssProps() {
          return {
              'background': `url(${this.image}) 50% 50% no-repeat`
          }
      }
  }
}
</script>

<style lang="css" scoped>
    .tile-container{
        margin: 0.2rem;
        /* background: url();
        background-size: cover;
        background-size: cover !important; */
        /* color: var(--img-url) */
    }

    .tile-img{
        background: url();
        background-size: cover;
        background-size: cover !important;
        width: 100%;
        height: 100%;
        max-height: 150px;
    }
    .text-wrapper{
        color: black;
        /* color: white;
        background: #00000091; */
        width: 100%;
    }
    .tile-text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: black;
        text-align: center;
        width: 100%;
        font-weight: 900;
    }
</style>