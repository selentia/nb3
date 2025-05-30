import axios from 'axios';

import handleAxiosError from '../utils/handleAxiosError.js';
import validateProduct from '../utils/validateProduct.js';
import config from '../../config.json' assert { type: "json" };
import { Product } from '../models/Product.js';
import { ElectronicProduct } from '../models/ElectronicProduct.js';

axios.defaults.timeout = 5000;
const { productsURL } = config;

const getProductList = async (page, pageSize, keyword) => {
  try {
    const res = await axios.get(productsURL, {
      params: { page, pageSize, keyword }
    });
    const productList = res.data?.list || [];
    return productList
      .filter(validateProduct)
      .map(i => {
        const isElectronic = i.tags?.includes('전자제품');
        return isElectronic ? new ElectronicProduct(i) : new Product(i);
      });
  } catch (e) {
    return handleAxiosError(e, 'getProductInstanceList');
  }
}

const getProduct = async (i) => {
  try {
    const res = await axios.get(`${productsURL}/${i}`);
    const data = res.data;

    if (!validateProduct(data)) return null;
    return data;

    /* const isElectronic = data.tags?.includes('전자제품');
    return isElectronic ? new ElectronicProduct(data) : new Product(data); */
  } catch (e) {
    return handleAxiosError(e, 'deleteArticle');
  }
}

const createProduct = async ({ name, description, price, tags, images }) => {
  try {
    const res = await axios.post(`${productsURL}/`, {
      name,
      description,
      price,
      tags,
      images
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res.data;
  } catch (e) {
    return handleAxiosError(e, 'deleteArticle');
  }
}

const patchProduct = async (i, body) => {
  try {
    const res = await axios.patch(`${productsURL}/${i}`, body, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  } catch (e) {
    return handleAxiosError(e, 'deleteArticle');
  }
}

const deleteProduct = async (i) => {
  try {
    const res = await axios.delete(`${productsURL}/${i}`);
    return res.data;
  } catch (e) {
    return handleAxiosError(e, 'deleteArticle');
  }
}

export { getProductList, getProduct, createProduct, patchProduct, deleteProduct };