<script lang="ts">
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js';
import { Bar } from 'vue-chartjs';
import { store } from "../store";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
    name: 'AppGraph',
    components: {
        Bar
    },
    data() {
        return {
            data: {
                labels: ['Carbo gr', 'Protein gr', 'Fat gr'],
                datasets: [{ data: [store.myData.carboDay, store.myData.proteinDay, store.myData.fatsDay] }]
            },
            options: {
                responsive: true
            },
            store
        }
    }
}
</script>
<template>
    <section>
        <div>
            <Bar :data="data" :options="options" />
        </div>
    </section>
</template>

<style lang="scss"></style>