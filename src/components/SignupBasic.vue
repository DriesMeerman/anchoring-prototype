<template>
  <div class="wrapper">
    <h1>Register</h1>
    <p class="text-emph" >You get <u>200 points</u> for signing up with your name and email</p>
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

    <p class="text-emph">You can gather additional points by adjusting the slider to share more information</p>
    
        
    <range-slider
        class="slider"
        min="0"
        max="50"
        step="10"
        v-model="sharing">
    </range-slider>

    <div>
        <h5>Current points {{(sharing * 10) + 200}}</h5>
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
            :class="submitClass()" >Submit</button>
  </div>
</template>

<script>
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

/**
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
  data() {
        return {
            firstName: null,
            lastName: null,
            email: null,
            age: null,
            sharing: 20,
            questions: [
                {
                    label: 'Age', 
                    type: 'number',
                    minShareCount: 10,
                    answer: null  
                },
                {
                    label: 'Gender',
                    type: 'dropdown',
                    options: ['Male', 'Female', 'Other'],
                    minShareCount: 20,
                    answer: null
                },
                {
                    label: 'Postal Code', 
                    type: 'text',
                    minShareCount: 30,
                    answer: null  
                },
                {
                    label: 'Highest achieved education',
                    type: 'dropdown',
                    options: [
                        'None',
                        'Basisonderwijs',
                        'VMBO',
                        'HAVO',
                        'VWO',
                        'MBO',
                        'Bachelor',
                        'Master',
                        'PhD'
                    ],
                    minShareCount: 40,
                    answer: null
                },
                {
                    label: 'Bruto Salary',
                    type: 'dropdown',
                    options: [
                        'Less than €1000',
                        '€1000 - 1999',
                        '€2000 - 2999',
                        '€3000 - 3999',
                        '€4000 - 4999',
                        'More than €5000'
                    ],
                    minShareCount: 50,
                    answer: null
                }
            ]
        };
    },


    watch: {
        sharing() {
            //console.log(this.sharing)
        }
    },
    methods: {
        submitClass(){
            return this.canSubmit() ? 'btn-primary' : 'btn-secondary';
        },
        canSubmit(){
            return hasBeenAnswered(this.sharing, this.questions) && this.firstName && this.lastName && this.email;
            // switch (this.sharing){
                
            //     case 10:

            //         break;
            //     case 20: 
            //         break;
            //     case 30:
            //         break;
            //     case 40:
            //         break;
            //     case 50:
            //         break;
            //     default:
            //         return false;
            // }
        }
    }
};
</script>

<style>

    .text-emph{
        font-weight: 500;
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