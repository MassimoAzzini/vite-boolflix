import { reactive } from "vue";

export const store = reactive ({
  apiUrlFilm: 'https://api.themoviedb.org/3/search/movie?api_key=e4a463b63aa1c537753294189dfb601c&query',
  apiUrlSerieTv: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query',
  cardFilmArray: [],
  nameToSearch: ''
  
})