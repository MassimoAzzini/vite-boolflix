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
    }
  },
  computed: {
    rateStars(){
      return Math.ceil(this.card.vote_average / 2)
    }
  }


}

</script>

<template>
  <div class="col">
    <div class="card card-cst position-relative">
      <div class="info">
        <div class="title">
          <span class="fw-bold">Titolo:</span>
          <span class="ms-2">{{ card.title || card.name }}</span>
        </div>

        <div class="original-title mt-2">
          <span class="fw-bold">Titolo originale: </span>
          <span class="ms-2">OrigTitle{{ card.original_title || card.original_name }}</span>
        </div>

        <div class="language mt-2">
          <img v-if="store.flagsArray.includes(card.original_language)" :src="`/public/` + card.original_language+`.png`" :alt="card.original_language">
          <span v-else class="language">{{ card.original_language }}</span>
        </div>

        <div class="vote mt-2">
          <span class="fw-bold me-2">Voto:</span>
          <span v-for="starRate in rateStars" :key="starRate" class="fa fa-star checked"></span>
          <span v-for="star in 5 - rateStars" :key="star" class="fa fa-star"></span>
        </div>

        <div class="overview mt-2">
          <span class="fw-bold">Overview: </span>
          <span class="ms-2">{{ card.overview }}</span>
        </div>

      </div>

      <div class="poster position-absolute w-100 h-100">
        <img class="w-100 h-100" :src="`https://image.tmdb.org/t/p/w342/` +card.poster_path" alt="">
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
  margin-bottom: 20px;
  background-color: black;
  border: 1px solid white;
  color: white;
  overflow: hidden;
  transition: all 1s;

  .poster {
    width: 220px;
    height: 340px;
    top: 0;
    left: 0;
    transition: all 1s;
  }

  .overview {
    overflow: auto;
  }

  .language {
    width: 20px;

    img {
      width: 100%;
    }
  }

  .checked {
    color: orange;
  }

  &:hover  {
    transform: scale(1.05);
    
    .poster {
      opacity: 0.2;
      z-index: 0;
    }
  }
  
}

</style>