<script lang="ts">
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend

} from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import { store } from "../store";

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'AppGraph',
    components: {
        Doughnut
    },
    computed: {
        chartData() {
            return {
                labels: ['Carbo', 'Protein', 'Fats'],
                datasets: [
                    {
                        data: [store.myData.carboDayCalories, store.myData.proteinDayCalories, store.myData.fatsDayCalories]
                    }
                ]
            }
        },
        chartOptions() {
            return {
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section>
        <div>
            <Doughnut :data="chartData" :options="chartOptions" />
        </div>
    </section>
</template>

<style lang="scss"></style>