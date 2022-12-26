import axios from 'axios';

const BASE_API_URL = 'https://metaadmin.onrender.com/api';

export const getNews = (keywords) => {
  return axios.get('http://api.mediastack.com/v1/news', {
    params: {
      keywords: keywords,
      access_key: '44b94d26bceefdf222ae9e7206dc6aef',
      countries: 'us,ca,au',
    },
  });
};

export const getArticles = (category) => {
  return axios.get(`${BASE_API_URL}/articles?category=${category}`);
};

export const getResources = () => {
  return axios.get(`${BASE_API_URL}/resources`);
};

export const getResourceById = (id) => {
  return axios.get(`${BASE_API_URL}/resources/${id}`);
};

export const getArticleById = (id) => {
  return axios.get(`${BASE_API_URL}/articles/${id}`);
};
