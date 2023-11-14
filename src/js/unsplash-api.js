export class UnsplashAPI {
  static BASE_URL = 'https://api.unsplash.com';
  static API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

  constructor() {
    this.query = null;
    this.page = 1;
  }

  fetchPhotosByQuery() {
    return fetch(
      `${UnsplashAPI.BASE_URL}/search/photos?query=${this.query}&page=${this.page}&per_page=20&orientation=portrait&client_id=${UnsplashAPI.API_KEY}`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }
}
