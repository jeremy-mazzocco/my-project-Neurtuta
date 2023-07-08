import { store } from "../../store";

export default {
    data() {
        return {
            store
        }
    }
}

export const data = {
    labels: ['Carbo', 'Protein', 'Fats'],
    datasets: [
        {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [store.myData.carboDayCalories, store.myData.proteinDayCalories, store.myData.fatsDayCalories]
        }
    ]
}

export const options = {
    responsive: true,
    maintainAspectRatio: false
}
