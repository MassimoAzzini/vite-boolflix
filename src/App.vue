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
      store,
      message: 'Effettua una ricerca'
    }
  },

  methods: {
    getApi(type){
      axios.get(store.apiUrl + type, {
        params: store.apiParams
      })

      .then(res => {
        store[type] = res.data.results
        
      })
      .catch(err => {
        console.log(err)
      })
    },

    startSearch(){
      this.getApi('movie')
      this.getApi('tv')

    }
    
  },

  mounted() {

  },
}


</script>

<template>
  <div>
    <Header @startSearch="startSearch" />
    <!-- <Main v-if="store.movie.length > 0" title="Film" type="movie" />
    <Main v-if="store.tv.length > 0" title="Serie Tv" type="tv" /> -->
    <div class="container-main">
      <h1 v-if="store.movie.length == 0 || store.tv.length == 0">{{ message }}</h1>

      <di v-else>
        <Main v-if="store.type === 'movie'" title="Film" type="movie" />
        <Main v-if="store.type === 'tv'" title="Serie Tv" type="tv" />
        <div v-if="store.type === ''">
          <Main title="Film" type="movie" />
          <Main title="Serie Tv" type="tv" />
        </div>
      </di>
    </div>

  </div>



</template>

<style lang="scss">
@use './scss/main.scss';

.container-main {
  height: calc(100vh - 100px);
  overflow: auto;
  background-color: grey;
}
</style>
