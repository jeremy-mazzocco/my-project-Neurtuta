<script>
import axios from "axios";
import { store } from './store';
import AppHeader from "./components/AppHeader.vue";
import AppMe from "./components/AppMe.vue";
import AppFood from "./components/AppFood.vue";
import AppGraph from "./components/AppGraph.vue";

export default {
  components: {

    AppHeader,
    AppMe,
    AppFood,
    AppGraph


  },
  data() {
    return {
      store,
    }
  },
  methods: {
    debugbutton() {

      // axios.get('https://api.edamam.com/search?q=chicken&app_id=663fa592&app_key=dd7f0a5ba437a993dcd7b477a059209f&from=0&to=3&calories=591-722&health=alcohol-free')
      //   .then(response => {
      //     store.myFood.dataAPI = response.data;

      //     console.log(this.store.myFood.dataAPI);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
}


</script>

<template>
  <AppHeader />

  <main>
    <AppMe />
    <AppFood />
    <AppGraph />

    <button @click="(debugbutton)">
      DEBUG BUTTON
    </button>

  </main>
</template>

<style lang="scss">
@use './components/general.scss' as*;
</style>
