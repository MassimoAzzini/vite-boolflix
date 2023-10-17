<script>
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


}
</script>

<template>
  <main>
    
    <div class="container cont-cast">
      <h1>{{ title }}</h1>
      <div class="row flex-wrap">
        <GeneralCard
            v-for="card in store[type]"
            :key="card.id"
            :card="card" />
      </div>
    </div>

  </main>
</template>


<style lang="scss" scoped>
main {
  width: 100%;
}

</style>