export default class {
  constructor(ref, onPage) {
    this.ref = ref;
    this.onPage = onPage;
    this.currentPage = 0;
    this.totalPages = 0;
  }

  on(currentPage, totalPages) {
    this.currentPage = Number(currentPage);
    this.totalPages = Number(totalPages);
    this.makeMarkUp();
    this.ref.addEventListener('click', this.handlePagination);
  }

  makeMarkUp() {
    let min = 0;
    let max = 0;
    if (this.totalPages > 7) {
      min =
        this.currentPage - 2 > 1 ? this.currentPage - 2 : this.currentPage - 1;
      max =
        this.currentPage + 2 < this.totalPages
          ? this.currentPage + 2
          : this.currentPage + 1;
    }
    let markUp = '';
    for (let i = 1; i <= this.totalPages; i += 1) {
      if (i === 1 || (i >= min && i <= max) || i === this.totalPages) {
        if (i !== this.currentPage) {
          markUp += `<li class="pagination-page" ><a href="#" data-num="${i}">${i}</a></li>`;
        } else {
          markUp += `<li class="pagination-page current-page" ><a href="#" data-num="${i}">${i}</a></li>`;
        }
      }
    }
    markUp = `
  <ul class="pagination-list">
  <a href="#" class="pagination-page" data-num="prev"><<</a>
  ${markUp}
  <a href="#" class="pagination-page" data-num="next">>></a>
  </ul>
  `;
    this.ref.innerHTML = markUp;
  }

  handlePagination = evt => {
    if (evt.target.nodeName !== 'A') {
      return;
    }
    this.ref.removeEventListener('click', this.handlePagination);
    switch (evt.target.dataset.num) {
      case 'prev':
        this.currentPage > 1 ? (this.currentPage -= 1) : this.currentPage;
        break;
      case 'next':
        this.currentPage < this.totalPages
          ? (this.currentPage += 1)
          : this.currentPage;
        break;
      default:
        this.currentPage = Number(evt.target.dataset.num);
    }
    this.onPage(this.currentPage);
  };
}
