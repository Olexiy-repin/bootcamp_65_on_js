// https://jsonplaceholder.typicode.com/
import { JsonPlaceholderAPI } from './jsonplaceholder-api.js';
import { createPostsCardsTemplate } from './templates/posts-cards.js';

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEL = document.querySelector('.js-load-more');

const jsonPlaceholderApi = new JsonPlaceholderAPI();

console.log(jsonPlaceholderApi);

jsonPlaceholderApi
  .fetchPosts()
  .then(posts => {
    console.log(posts);

    postsListEl.innerHTML = createPostsCardsTemplate(posts);
    loadMoreBtnEL.classList.remove('is-hidden');
  })
  .catch(err => {
    console.log(err);
  });

const onLoadMoreBtnElClick = event => {
  jsonPlaceholderApi.page += 1;

  jsonPlaceholderApi
    .fetchPosts()
    .then(posts => {
      if (posts.length === 0) {
        loadMoreBtnEL.classList.add('is-hidden');
        loadMoreBtnEL.removeEventListener('click', onLoadMoreBtnElClick);

        return;
      }

      postsListEl.insertAdjacentHTML(
        'beforeend',
        createPostsCardsTemplate(posts)
      );
    })
    .catch();
};

loadMoreBtnEL.addEventListener('click', onLoadMoreBtnElClick);
