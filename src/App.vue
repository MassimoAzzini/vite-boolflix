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

  methods: {
    getApi(){
      axios.get(store.apiUrlFilm, {
        params: {
          query: store.nameToSearch,
        }
      })
      .then(res => {
        store.cardFilmArray = res.data.results
      })
      .catch(err => {
        console.log(err)
      })
    }
    
  },
  mounted() {
    this.getApi(),
    console.log(store.cardFilmArray);
  },
}


</script>

<template>
  <div>
  <Header />
  <Main @startSearch="getApi()" />

  </div>



</template>

<style lang="scss">
@use './scss/main.scss';
</style>
