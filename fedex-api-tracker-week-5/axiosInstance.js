import axios from 'axios';
import fetchToken from './service/tokenService.js';

const createAxiosInstance = (config = {}) => {
  const instance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 1000,
    ...config,
  });

  instance.interceptors.request.use(
    async (config) => {
      const token = await fetchToken();
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosInstance;
