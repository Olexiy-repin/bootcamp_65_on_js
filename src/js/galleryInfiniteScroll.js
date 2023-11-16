// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api.js';
import { createGalleryCardsTemplate } from './templates/gallery-cards.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');
const targetInfiniteScrollObserverEl = document.querySelector('.js-target-infinite-scroll');

const unsplashApi = new UnsplashAPI();

const loadMorePhotos = async (entries, observer) => {
  if (!entries[0].isIntersecting) {
    return;
  }

  unsplashApi.page += 1;

  try {
    const { data } = await unsplashApi.fetchPhotosByQuery();

    galleryListEl.insertAdjacentHTML('beforeend', createGalleryCardsTemplate(data.results));

    if (data.total_pages === unsplashApi.page) {
      observer.unobserve(targetInfiniteScrollObserverEl);
    }
  } catch (err) {
    console.log(err);
  }
};

const infinityScrollObserver = new IntersectionObserver(loadMorePhotos, {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 1,
});

const onSearchFormElSubmit = async event => {
  event.preventDefault();

  const { target: searchFormEl } = event;

  unsplashApi.query = searchFormEl.elements.user_search_query.value;
  unsplashApi.page = 1;

  try {
    const { data } = await unsplashApi.fetchPhotosByQuery();

    if (data.total === 0) {
      galleryListEl.innerHTML = '';

      infinityScrollObserver.unobserve(targetInfiniteScrollObserverEl);

      searchFormEl.reset();

      return;
    }

    if (data.total_pages === 1) {
      galleryListEl.innerHTML = createGalleryCardsTemplate(data.results);

      infinityScrollObserver.unobserve(targetInfiniteScrollObserverEl);

      return;
    }

    galleryListEl.innerHTML = createGalleryCardsTemplate(data.results);
    setTimeout(() => {
      infinityScrollObserver.observe(targetInfiniteScrollObserverEl);
    }, 300);
  } catch (err) {
    console.log(err);
  }
};

// const onLoadMoreBtnElClick = async event => {
//   unsplashApi.page += 1;

//   try {
//     const { data } = await unsplashApi.fetchPhotosByQuery();

//     galleryListEl.insertAdjacentHTML('beforeend', createGalleryCardsTemplate(data.results));

//     if (data.total_pages === unsplashApi.page) {
//       loadMoreBtnEl.classList.add('is-hidden');
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

searchFormEl.addEventListener('submit', onSearchFormElSubmit);
