export default class {
  BASE_URL = 'https://api.themoviedb.org/3';
  KEY_API = 'dc4940972c268b026150cf7be6f01d11';
  ENDPOINT = '/trending/movie/day';

  qOptions = new URLSearchParams({
    api_key: this.KEY_API,
    // query: 'xxx',
    // page: 1,
  });

  constructor() {}

  async getMovies(page = 1) {
    this.qOptions.set('page', page);
    const url = `${this.BASE_URL}${this.ENDPOINT}?${this.qOptions}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  }
}
