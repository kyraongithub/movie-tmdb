const movieEndpoint = {
  getList: (category: string, page: number = 1) =>
    `/movie/${category}?page=${page}`,
  getDetailMovie: (id: string) => `/movie/${id}`,
  searchMovie: (query: string, page: number = 1) =>
    `/search/movie?query=${query}&page=${page}`,
};

export default movieEndpoint;
