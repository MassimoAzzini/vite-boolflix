<script>
import GeneralCard from './GeneralCard.vue';
import { store } from '../../data/store'

export default {
  name: 'Film',
  components:{
    GeneralCard

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
    <div class="row">
      <div v-if="store.cardFilmArray.length == 0">NESSUN RISULTATO</div>
      <GeneralCard
          v-else
          v-for="card in store.cardFilmArray"
          :key="card.id"
          :Title="card.title"
          :OrigTitle="card.original_title"
          :OrigLanguage="card.original_language"
          :Vote="card.vote_average"
          :Overview="card.overview" />
    </div>
  </div>

</template>

<style lang="scss" scoped>

</style>