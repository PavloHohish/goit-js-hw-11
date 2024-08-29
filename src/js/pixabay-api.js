import { showErrorToast } from './render-functions.js';

export function fetchImages(keyword) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    keyword
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        showErrorToast('No images found');
      }
      return data.hits;
    });
}
