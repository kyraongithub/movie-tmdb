import api from '../api';
import movieEndpoint from './endpoints';

const fetchMovieList = async (
  page: number = 1,
  category: string = 'now_playing'
) => {
  const response = await api.get(movieEndpoint.getList(category, page));
  const { data } = response;
  return { data: [...data.results], total: data.total_pages };
};
const searchMovies = async (page: number = 1, query: string) => {
  const response = await api.get(movieEndpoint.searchMovie(query, page));
  const { data } = response;
  return { data: [...data.results], total: data.total_pages };
};
const fetchMovieDetail = async (id: string) => {
  const response = await api.get(movieEndpoint.getDetailMovie(id));
  const { data } = response;
  return data.results;
};

const services = {
  fetchMovieList,
  searchMovies,
  fetchMovieDetail,
};

export default services;
