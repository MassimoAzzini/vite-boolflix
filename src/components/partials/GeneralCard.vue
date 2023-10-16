<script>
import {store} from '../../data/store';

export default {
  name: 'GeneralCard',
  props: {
    title: String,
    OrigTitle: String,
    Vote: String,
    Overview: String,
  },

  data() {
    return {
      store

    }
  },


}
</script>

<template>
  <div class="card card-cst">

    <div class="title">
      <span class="fw-bold">Titolo:</span>
      <span>{{ store.results[0].title }}</span>
    </div>

    <div class="original-title">
      <span class="fw-bold">Titolo originale:</span>
      <span>TITOLO ORIGINALE API</span>
    </div>

    <div class="vote">
      <span class="fw-bold">Voto:</span>
      <span>STELLINE</span>
    </div>
    <div class="Overview">
      <span class="fw-bold">Overview:</span>
      <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique incidunt eos vel, voluptatem minus veniam ad tenetur dolores veritatis quae?</span>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.card-cst {
  font-size: 0.8rem;
}

</style>