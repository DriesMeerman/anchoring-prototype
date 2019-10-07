<template>
  <div class="wrapper">
    <h1>Register</h1>
    <div class="form-group">
      <label for="usr">Name:</label>
      <input type="text" class="form-control" id="usr" />
    </div>
    <div class="form-group">
      <label for="mail">Email:</label>
      <input type="email" class="form-control" id="mail" />
    </div>

    <p>You get 200 points for signing up <br/>
       You can get more points by maxing out the slider
    </p>
        
    <range-slider
        class="slider"
        min="0"
        max="80"
        step="20"
        v-model="sharing">
    </range-slider>

    <div>
        <h5>Current points {{(sharing * 10) + 200}}</h5>
    </div>

    <div v-if="sharing > 0">
        <div class="form-group">
            <label for="age">Age</label>
            <input type="number" class="form-control" id="age" v-model="age" />
        </div>
        
    </div>

    <div v-if="sharing > 20">
        <div class="form-group">
            <label for="gender">Gender</label>
            <input type="text" class="form-control" id="gender" />
        </div>
    </div>

    <div v-if="sharing > 40">
        <div class="form-group">
            <label for="prof">Profession</label>
            <input type="text" class="form-control" id="prof" />
        </div>
    </div>

    <div v-if="sharing > 60">
        <div class="form-group">
            <label for="salary">Salary</label>
            <input type="text" class="form-control" id="salary" />
        </div>
    </div>


    
    <button class="btn btn-primary w-75 mb-4">Submit</button>
  </div>
</template>

<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'


export default {    
  name: "SignupBasic",
  props: {},
  components: {
      RangeSlider
  },
  data() {
        return {
            sharing: 40
        };
    },
    watch: {
        sharing() {
            console.log(this.sharing)
        }
    },
    methods: {
        canSubmit(){
            
        }
    }
};
</script>

<style>

    .slider {
        widtH: 80%;
    }

    .range-slider-fill{
        background-color: #0f4aee !important;
    }


    .wrapper {
        margin: 1rem;
    }
</style>