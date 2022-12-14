import axios from 'axios';

const BASE_API_URL = 'http://localhost:3000/api';

export const getNews = (query) => {
  return axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
    params: {
      q: query,
      sort: 'relevance',
      'api-key': 'R08QMxMqUa0LVJ4cOPnyRmEXHgmRFZLM',
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
