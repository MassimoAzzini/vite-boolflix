import { reactive } from "vue";

export const store = reactive ({
  apiUrl: 'https://api.themoviedb.org/3/',
  apiParams: {
    api_key: 'e4a463b63aa1c537753294189dfb601c',
    language: 'it-IT',
    query: '',
  },

  flagsArray: ['en', 'it'],
  genresMovieArray: [],
  genresTvArray: [],

  type: '',
  genre: '',

  movie: [],
  tv: [],

  // https://api.themoviedb.org/3/movie/{movie_id}/credits,
  // https://api.themoviedb.org/3/tv/{serie_id}/credits
  
})