const api_key = "f38fbe26f4fd9a9935e3d31caeaee27a";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchNetflixOrignals: `/discover/tv?api_key=${api_key}&with_networks=213`,
  topRated: `/movie/top_rated?api_key=${api_key}&language=en_US`,
  actionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
  upComing: `movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
  Popular: `movie/popular?api_key=${api_key}&language=en-US&page=1`,
};

export default requests;
