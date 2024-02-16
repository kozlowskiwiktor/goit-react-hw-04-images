import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '34960396-ee79eba7e6dca12e9fa7bf6c6';

const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

export default fetchImages;