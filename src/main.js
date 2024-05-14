import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showErrorToast,
  renderLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('submit', event => {
  event.preventDefault();

  const keyword = searchInput.value.trim();

  if (keyword === '') {
    showErrorToast('Please enter a search term.');
    return;
  }

  const loader = renderLoader();

  setTimeout(() => {
    fetchImages(keyword)
      .then(images => {
        renderImages(images);
        loader.remove();
      })
      .catch(error => {
        console.log(error);
        loader.remove();
      });
  }, 2000);
});
