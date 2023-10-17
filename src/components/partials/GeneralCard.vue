<script>
import { store } from '../../data/store';


export default {
  name: 'GeneralCard',
  props: {
    card: Object,
  },
  data() {
    return {
      store,
      rateStars: '',
    }
  }


}

</script>

<template>
  <div class="col">
    <div class="card card-cst">

      <div class="title">
        <span class="fw-bold">Titolo: </span>
        <span>{{ card.title || card.name }}</span>
      </div>

      <div class="original-title">
        <span class="fw-bold">Titolo originale: </span>
        <span>OrigTitle{{ card.original_title || card.original_name }}</span>
      </div>

      <div class="language">
        <img v-if="store.flagsArray.includes(card.original_language)" :src="`/public/` + card.original_language+`.png`" :alt="card.original_language">
        <span v-else class="language">{{ card.original_language }}</span>
      </div>

      <div class="vote">
        <span class="fw-bold">Voto: </span>
        <span>{{ card.vote_average }}</span>
        <span v-for="star in this.rateStars" :key="star" class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
      </div>
      
      <div class="Overview">
        <span class="fw-bold">Overview: </span>
        <span>{{ card.overview }}</span>
      </div>

    </div>

  </div>
</template>


<style lang="scss" scoped>
.card-cst {
  width: 220px;
  height: 340px;
  font-size: 0.7rem;
  padding: 10px;
  overflow: auto;
  margin-bottom: 20px;
  background-color: black;
  color: white;
  .language {
    width: 20px;

    img {
      width: 100%;
    }
  }

  .checked {
  color: orange;
}
}

</style>