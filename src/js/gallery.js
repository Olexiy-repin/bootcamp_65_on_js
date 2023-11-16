// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api.js';
import { createGalleryCardsTemplate } from './templates/gallery-cards.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const unsplashApi = new UnsplashAPI();

const onSearchFormElSubmit = async event => {
  event.preventDefault();

  const { target: searchFormEl } = event;

  unsplashApi.query = searchFormEl.elements.user_search_query.value;
  unsplashApi.page = 1;

  try {
    const { data } = await unsplashApi.fetchPhotosByQuery();

    if (data.total === 0) {
      galleryListEl.innerHTML = '';

      loadMoreBtnEl.classList.add('is-hidden');

      searchFormEl.reset();

      return;
    }

    if (data.total_pages === 1) {
      galleryListEl.innerHTML = createGalleryCardsTemplate(data.results);
      loadMoreBtnEl.classList.add('is-hidden');

      return;
    }

    galleryListEl.innerHTML = createGalleryCardsTemplate(data.results);
    loadMoreBtnEl.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtnElClick = async event => {
  unsplashApi.page += 1;

  try {
    const { data } = await unsplashApi.fetchPhotosByQuery();

    galleryListEl.insertAdjacentHTML('beforeend', createGalleryCardsTemplate(data.results));

    if (data.total_pages === unsplashApi.page) {
      loadMoreBtnEl.classList.add('is-hidden');
    }
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMoreBtnElClick);
