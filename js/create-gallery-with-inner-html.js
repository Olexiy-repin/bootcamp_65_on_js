const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

// const titleEl = document.querySelector('.js-title');

// titleEl.textContent = '<span>Main</span> title!';
// titleEl.innerHTML = '<span>Main</span> <a href="#">title!</a>';

// console.dir(titleEl);

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

const galleryListEl = document.querySelector('.js-gallery');

// Функція для створення карточки makeGalleryCard(cardInfo)
const makeGalleryCard = pictureInfo => {
  const { width, height, url, alt } = pictureInfo;

  return `
    <li class="gallery-item">
      <a href="#">
        <img src="${url}" alt="${alt}" width="${width}" height="${height}">
      </a>
    </li>
  `;
};

// Створення масиву рядків із елементами
const cardsArr = pictures.map(pictureInfo => {
  return makeGalleryCard(pictureInfo);
});

console.log(cardsArr);

// Вставка елементів на сторінку
// galleryListEl.innerHTML = cardsArr.join('');
galleryListEl.insertAdjacentHTML('beforeend', cardsArr.join(''));
