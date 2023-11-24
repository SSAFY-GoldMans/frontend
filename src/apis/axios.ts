import Axios from 'axios';

import { accessTokenProvider } from '@/utils/token';

const baseURL = process.env.BASE_URL;

const axios = Axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosWithAccessToken = Axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosWithAccessToken.interceptors.request.use(function (config) {
  const accessToken = accessTokenProvider.get();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

export { baseURL, axios, axiosWithAccessToken };
