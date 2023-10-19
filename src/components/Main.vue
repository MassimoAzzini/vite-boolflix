<script>
import axios from 'axios'
import GeneralCard from './partials/GeneralCard.vue';
import { store } from '../data/store'


export default {
  name: 'Main',
  props: {
    title: String,
    type: String
  },

  components: {
    GeneralCard
  },
  
  data() {
    return {
      store
    }
  },
  methods: {
    getApiGenresList(category){
        axios.get(store.apiUrl + 'genre/' + category + '/list', {
          params:{
          api_key: store.apiParams.api_key,
          language: store.apiParams.language
        }

        })
        .then (res => {
          store.genresArray = res.data.genres;
        })

        .catch (err => {
          console.log(err);
        })
      }
  },
  mounted() {
    this.getApiGenresList(this.type)
    console.log(store.genresArray);

  },




}
</script>

<template>
  <main v-if="store[type].length > 0">
    
    <div class="container-fluid cont-cast">

      <div class="d-flex justify-content-center">
        <h1>{{ title }}</h1>

        <select v-model="store.genre" class="form-select me-3" aria-label="Default select example">
          <option selected value="">All</option>
          <option v-for="genre in store.genresArray" :key="genre.id" value="{{genre.id}}">{{genre.name}}</option>
        </select>
      </div>

      <div class="row justify-content-center">
        <GeneralCard
            v-for="card in store[type]"
            :key="card.id"
            :card="card"
            :type="type" />
      </div>
    </div>

  </main>
</template>


<style lang="scss" scoped>
main {
  width: 100%;

  .cont-cast {
    width: 90%;
    
    h1 {
      color: white;
      font-weight: bolder;
      margin-top: 30px;
      margin-bottom: 20px
    }

    select {
      width: 200px;
      height: 30px;
      margin-top: 40px;
      margin-left: 20px;
      vertical-align: middle;
    }

  }
}

</style>