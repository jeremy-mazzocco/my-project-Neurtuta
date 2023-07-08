<script lang="ts">
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend

} from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import { store } from "../store";
import * as chartConfig from '../components/micro_components/ChartConfig.js';


ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'AppGraph',
    components: {
        Doughnut
    },
    data() {
        return chartConfig
        store

    }
}

</script>
<template>
    <section>
        <div>
            <Doughnut :data="data" :options="options" />
        </div>
    </section>
</template>

<style lang="scss"></style>