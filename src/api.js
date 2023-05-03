import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.sampleapis.com',
});

export const fetchData = () => {
  return apiClient.get('/countries/countries');
};

