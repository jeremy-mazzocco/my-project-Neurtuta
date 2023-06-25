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
        calories: 0,
    }
})

// 10 * weight (kg) + 6.25 * height(cm) - 5 * age(y) + 5 for (man)

// 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) - 161 for ​(woman)