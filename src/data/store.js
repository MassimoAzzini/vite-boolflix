import { reactive } from "vue";

export const store = reactive ({
  apiUrlFilm: 'https://api.themoviedb.org/3/search/movie',
  apiUrlSerieTv: 'https://api.themoviedb.org/3/search/tv',
  apiParams: {
    api_key: 'e4a463b63aa1c537753294189dfb601c',
    language: 'it-IT',
    query: '',
  },

  cardFilmArray: [],
  cardSerieArray: [],
  
})