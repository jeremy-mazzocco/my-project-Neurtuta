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

        // chart in calories
        chartDataCal() {
            return {
                labels: ['Carbo', 'Protein', 'Fats'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#c9c948', '#6272ef'],
                        data: [store.myData.carboDayPercentage, store.myData.proteinDayPercentage, store.myData.fatsDayPercentage]
                    }
                ]
            }
        },
        chartOptionsCal() {
            return {
                responsive: true,
                maintainAspectRatio: false
            }
        },

        // chart in grams
        // chartDataGrams() {
        //     return {
        //         labels: ['Carbo', 'Protein', 'Fats'],
        //         datasets: [
        //             {
        //                 backgroundColor: ['#41B883', '#c9c948', '#6272ef'],
        //                 data: [store.myData.carboDay, store.myData.proteinDay, store.myData.fatsDay]
        //             }
        //         ]
        //     }
        // },
        // chartOptionsGrams() {
        //     return {
        //         responsive: true,
        //         maintainAspectRatio: false
        //     }
        // }
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
        <div class="chart">
            <Doughnut :data="chartDataCal" :options="chartOptionsCal" />
        </div>
        <!-- <div class="chart">
            <Doughnut :data="chartDataGrams" :options="chartOptionsGrams" />
        </div> -->
    </section>
</template>

<style lang="scss"></style>