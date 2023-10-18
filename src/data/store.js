import { reactive } from "vue";

export const store = reactive ({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiParams: {
    api_key: 'e4a463b63aa1c537753294189dfb601c',
    language: 'it-IT',
    query: '',
  },

  apiUrlCast: 'https://api.themoviedb.org/3/',
  
  flagsArray: ['en', 'it'],

  type: '',
  movie: [],
  tv: [],

  // https://api.themoviedb.org/3/movie/{movie_id}/credits,
  // https://api.themoviedb.org/3/tv/{serie_id}/credits
  
})