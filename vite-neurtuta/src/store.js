import { reactive } from "vue";

export const store = reactive({
    myData: {
        gender: '',
        height: '',
        age: '',
        weight: '',
        caloriesBMI: 0,
        numberWorkouts: 0,
        caloriesWithWO: 0,
        caloriesCut: 0,
        caloriesDay: 0,
        caloriesWeek: 0,
        leanMass: 0,
        proteinKilo: 0,
        fatsKilo: 0,
        carboDay: 0,
        proteinDay: 0,
        fatsDay: 0,
        carboDayCalories: 0,
        proteinDayCalories: 0,
        fatsDayCalories: 0
    }
})

