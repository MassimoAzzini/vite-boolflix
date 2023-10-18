<script>
import { store } from '../../data/store';
import axios from 'axios'



export default {
  name: 'GeneralCard',
  props: {
    card: Object,
    type: String
  },

  data() {
    return {
      store,
      cast: []
    }
  },

  computed: {
    rateStars(){
      return Math.ceil(this.card.vote_average / 2)
    },

    getApiCast(gen){
      axios.get(store.apiUrlCast + gen + '/' + this.card.id + '/credits', {
        params:{
          api_key: store.apiParams.api_key,
          language: store.apiParams.language
        }

      })
      .then((res) =>{
        this.cast = res.data.cast;
        console.log(this.cast);

      })
      .catch((err) => {
        console.log(err);
      })
    },
  },

  mounted() {
    this.getApiCast(this.type)
    console.log(this.type);

  },


}

</script>

<template>
  <div class="col-auto">
    <div class="card card-cst position-relative">

      <div v-if="card.poster_path" class="poster w-100 h-100">
        <img class="w-100 h-100" :src="`https://image.tmdb.org/t/p/w342/` +card.poster_path" alt="">
      </div>

      <!-- info film in caso di mancata immagine -->
      <div v-else class="d-flex flex-column w-100 h-100 p-2">

        <div class="title">
          <span class="fw-bold">Titolo:</span>
          <span class="ms-2">{{ card.title || card.name }}</span>
        </div>

        <div class="original-title mt-2">
          <span class="fw-bold">Titolo originale: </span>
          <span class="ms-2">OrigTitle{{ card.original_title || card.original_name }}</span>
        </div>

        <div class="language mt-2">
          <img v-if="store.flagsArray.includes(card.original_language)" :src="`/` + card.original_language+`.png`" :alt="card.original_language">
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


      <div class="info d-flex flex-column w-100 h-100 p-2">

        <div class="title">
          <span class="fw-bold">Titolo:</span>
          <span class="ms-2">{{ card.title || card.name }}</span>
        </div>

        <div class="original-title mt-2">
          <span class="fw-bold">Titolo originale: </span>
          <span class="ms-2">OrigTitle{{ card.original_title || card.original_name }}</span>
        </div>

        <div class="language mt-2">
          <img v-if="store.flagsArray.includes(card.original_language)" :src="`/` + card.original_language+`.png`" :alt="card.original_language">
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
          <div>
            <span>Cast:</span>
            <span></span>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>


<style lang="scss" scoped>
.card-cst {
  width: 220px;
  height: 340px;
  font-size: 0.7rem;
  margin-bottom: 20px;
  background-color: rgba(#000000, 0.8);
  border: 1px solid white;
  color: white;
  overflow: hidden;
  transition: all 1s;

  .language {
      width: 20px;
      
      img {
        width: 100%;
      }
    }

    .checked {
      color: orange;
    }


  .info {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;

    .overview {
      overflow: auto;
      scrollbar-width: thin;
    }
  }


  .poster {
    opacity: 1;
    transition: all 1s;
  }

  &:hover  {
    
    .poster {
      opacity: 0.2;
      transform: scale(1.05);

    }

    .info {
      opacity: 1;
    }
  }
  
}

</style>