import refs from './js/refs';
import ThemoviedbApi from './js/themoviedb-api';
import Gallery from './js/gallery';
import Pagination from './js/pagination';
const moviedb = new ThemoviedbApi();
const gallery = new Gallery(refs.gallery);
const pagination = new Pagination(refs.pagination, reNewPage);
displayMovies();

async function displayMovies(page = 1) {
  const movies = await moviedb.getMovies(page);
  gallery.render(movies.results);
  pagination.on(movies.page, movies.total_pages);
}

function reNewPage(page) {
  displayMovies(page);
}
