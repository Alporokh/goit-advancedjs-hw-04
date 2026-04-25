import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '55511157-7a64d58fac1bd8bae601b6272';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: PER_PAGE,
      page,
    },
  });
  return response.data;
}
