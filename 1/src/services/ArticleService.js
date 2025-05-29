import axios from 'axios';
axios.defaults.timeout = 5000;

import config from '../../config.json' assert { type: "json" };
const { articlesURL } = config;
import { Article } from '../models/Article.js';
import handleAxiosError from '../utils/handleAxiosError.js';

const getArticleList = (page, pageSize, keyword) => {
  return axios.get(articlesURL, {
    params: { page, pageSize, keyword }
  })
    .then(res => {
      const articleList = res.data?.list || [];
      return articleList.map(i => new Article(i));
    })
    .catch(e => handleAxiosError(e, 'getArticleList'));
}

const getArticle = (i) => {
  return axios.get(`${articlesURL}/${i}`)
    .then(res => res.data)
    .catch(e => handleAxiosError(e, 'getArticle'));
}

const createArticle = ({ title, content, image }) => {
  return axios.post(`${articlesURL}`, {
    title,
    content,
    image
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.data)
    .catch(e => handleAxiosError(e, 'createArticle'));
}


const patchArticle = (i, body) => {
  return axios.patch(`${articlesURL}/${i}`, body, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.data)
    .catch(e => handleAxiosError(e, 'patchArticle'));
}

const deleteArticle = (i) => {
  return axios.delete(`${articlesURL}/${i}`)
    .then(res => res.data)
    .catch(e => handleAxiosError(e, 'deleteArticle'));
}

export { getArticleList, getArticle, createArticle, patchArticle, deleteArticle };