<template>
  <div class="wrapper">
    <h1>Register</h1>
    <p class="text-emph" >You get <u>{{signupBonus}} points</u> for signing up with your name and email</p>
    <div class="form-group">
      <label for="usr">First Name:</label>
      <input type="text" class="form-control" id="usr" v-model="firstName" />
    </div>
    <div class="form-group">
      <label for="lusr">Last Name:</label>
      <input type="text" class="form-control" id="lusr" v-model="lastName"/>
    </div>
    <div class="form-group">
      <label for="mail">Email:</label>
      <input type="email" class="form-control" id="mail" v-model="email"/>
    </div>

    <hr class="mt-5">
    <p class="text-emph">You can gather additional points by adjusting the slider to share more information
        Before you can submit you have to move the slider at least onceS
    </p>
    
        
    <range-slider
        class="slider"
        min="0"
        max="50"
        step="10"
        v-model="sharing">
    </range-slider>

    <div>
        <h5>Current points {{calculatePoints()}}</h5>
    </div>

    <div v-for="question in questions" v-if="sharing >= question.minShareCount">
        <div class="form-group">
            <label for="salary">{{question.label}}</label>
            <input v-if="question.type != 'dropdown'" 
                   v-model="question.answer"
                   :type="question.type" 
                   class="form-control" id="salary" />
            <select v-if="question.type === 'dropdown'" class="form-control" v-model="question.answer" >
                <option v-for="option in question.options"
                        :value="option" >{{option}}</option>
            </select>
        </div>
    </div>
    
    <button class="btn  form-control mb-4"
            v-on:click="submit"
            :class="submitClass()" >Submit</button>
  </div>
</template>

<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

/**
 * @param {number} shareCount
 * @param {object[]} questions see configuration files in Data for format.
 * @returns {boolean} whether values have been set on the questions until that sharecount
 */
function hasBeenAnswered(shareCount, questions){
    return questions.filter(q => q.minShareCount <= shareCount).every(q => q.answer !== null);
}

export default {    
  name: "SignupBasic",
  props: {},
  components: {
      RangeSlider
  },

  watch:{
      sharing: function(){
          this.sliderMoved = true;
      }
  },
  data() {
        return {
            firstName: null,
            lastName: null,
            email: null,
            age: null,
            sharing: 0,
            sliderMoved: false,
            questions: this.$root.$data.sharedState.questions || [],
            signupBonus: this.$root.$data.sharedState.signupBonus || 0
        };
    },
    methods: {
        submitClass(){
            return this.canSubmit() ? 'btn-primary' : 'btn-secondary';
        },
        canSubmit(){
            return this.sliderMoved && hasBeenAnswered(this.sharing, this.questions) && this.firstName && this.lastName && this.email;
        },
        calculatePoints(){
            return (this.sharing * 10) + this.signupBonus;
        },
        submit(){
            if (!this.canSubmit()) return;
            window.setPoints = true; //lazy bad
            this.$root.$data.sharedState.points = this.calculatePoints();
            this.$router.push({
              name: 'Home'
            })
        }
    }
};
</script>

<style>

    .text-emph{
        font-weight: 500;
    }

    .text-emph > u {
        font-weight: 600 !important;
    }

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