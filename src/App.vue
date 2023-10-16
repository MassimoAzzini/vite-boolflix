<script>
import axios from 'axios'
import {store} from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main

  },

  data() {
    return {
      store
    }
  },
}


</script>

<template>
  <div class="container">
  <Header />
  <Main />

  </div>



</template>

<style lang="scss">
@use './scss/main.scss';
</style>
