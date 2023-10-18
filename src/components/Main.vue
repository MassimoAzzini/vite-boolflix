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
  <main v-if="store[type].length > 0">
    
    <div class="container-fluid text-center cont-cast">
      <h1>{{ title }}</h1>
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
  }

  h1 {
    color: white;
    font-weight: bolder;
    margin-top: 30px;
    margin-bottom: 20px
  }
}

</style>