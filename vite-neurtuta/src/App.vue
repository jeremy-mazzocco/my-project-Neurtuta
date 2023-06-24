<script>
import axios from "axios";
import { store } from './store';

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    newCaloriesCalculation() {
      let caloriesBMI = 0;

      if (store.myData.gender === 'male') {
        caloriesBMI = (10 * store.myData.weight + 6.25 * store.myData.height - 5 * store.myData.age + 5) * 1.1;

      } else if (store.myData.gender === 'female') {
        caloriesBMI = (10 * store.myData.weight + 6.25 * store.myData.height - 5 * store.myData.age - 161) * 1.1;
      };
      // put in store caloriesBMI
      store.myData.caloriesBMI = Math.round(caloriesBMI);

      let caloriesWithWO = caloriesBMI * parseFloat(store.myData.numberWorkouts);
      // put in store caloriesWithWO
      store.myData.caloriesWithWO = Math.round(caloriesWithWO);


      console.log(caloriesBMI, caloriesWithWO);
      // console.log(typeof caloriesWithWO);


      // console.log(store.myData.calories);
      // console.log(caloriesWithWO);

    },
    debugbutton() {

    }
  }
}


</script>

<template>
  <h1>
    Neurtuta
  </h1>
  <h4>
    you're personal mesures
  </h4>

  <main>
    <div class="mycalories-calculator">

      <label for="weight">Weight in kg</label>
      <input v-model="store.myData.weight" type="text" id="weight">
      <br>
      <label for="height">Height in cm</label>
      <input v-model="store.myData.height" type="text" id="height">
      <br>
      <label for="age">Age</label>
      <input id="insert age" v-model="store.myData.age" type="text">
      <br>
      <select v-model="store.myData.gender" id="gender">
        <option disabled value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <br>
      <div>Select number of workout in a week</div>
      <input v-model="store.myData.numberWorkouts" type="radio" id="one" value="1.2">
      <label for="one">20%</label>

      <input v-model="store.myData.numberWorkouts" type="radio" id="two" value="1.3">
      <label for="two">30%</label>

      <input v-model="store.myData.numberWorkouts" type="radio" id="three" value="1.4">
      <label for="three">40%</label>

      <input v-model="store.myData.numberWorkouts" type="radio" id="four" value="1.5">
      <label for="four">50%</label>

      <br>
      <button @click="(newCaloriesCalculation)">
        Calculate
      </button>

    </div>
    <div>
      Your BMI is {{ store.myData.caloriesBMI }} Kcal
    </div>
    <div>
      Your calories with workout {{ store.myData.caloriesWithWO }} Kcal
    </div>

    <button @click="(debugbutton)">
      DEBUG BUTTON
    </button>
  </main>
</template>

<style lang="scss">
@use './components/general.scss' as*;

h1 {
  text-align: center;
}
</style>
