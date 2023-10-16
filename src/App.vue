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
      axios.get(store.apiUrl)
      .then(res => {
        console.log(res.data.results[0].title);
        console.log(res.data.results[0].original_title);
        console.log(res.data.results[0].original_language);
        console.log(res.data.results[0].vote_average);
        console.log(res.data.results[0].poster_path);
      })
      .catch(err => {
        console.log(err)
      })
    }
    
  },
  mounted() {
    this.getApi()
  },
}


</script>

<template>
  <div>
  <Header />
  <Main />

  </div>



</template>

<style lang="scss">
@use './scss/main.scss';
</style>
