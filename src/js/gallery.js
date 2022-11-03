const BASE_URL = 'https://image.tmdb.org/t/p/original';

export default class {
  constructor(ref) {
    this.ref = ref;
  }
  render(data) {
    console.log(data);
    let markUp = data.reduce((markUp, el) => {
      if (el.backdrop_path) {
        markUp += makeMarkUpItem(el);
      }
      return markUp;
    }, '');
    markUp = `
    <ul class="gallery-list">
    ${markUp}
    </ul>
    `;
    this.ref.innerHTML = markUp;
  }
}

function makeMarkUpItem(movie) {
  const img = `${BASE_URL}${movie.poster_path}`;
  const title = movie.title;
  const genre = movie.genre_ids.map(e => e).join(',');
  const data = movie.release_date;
  const rating = movie.vote_average;

  return `
    <li class="gallery-item">
    <img class="item-img" src="${img}" alt="${title}" loading="lazy"/>
    <p class="item-title">${title}</p>
    <div class="item-data">
    <p class="item-genre">${genre}</p>
    <p class="item-data">${data}</p>
    <p class="item-rating">${rating}</p>
    </div>
    </li>
    `;
}
