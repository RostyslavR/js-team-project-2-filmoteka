import refs from './js/refs';
import Pagination from './js/pagination';
const pagination = new Pagination(refs.pagination, reNewPage);

pagination.on(5, 15);

function reNewPage(page) {
  pagination.on(page, 15);
}
