import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/,'') || 'http://localhost:8000'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
    res => res,
    err => {
        if (err.code !== 'ERR_NETWORK') {
            console.error('API call failed:', err.response?.data || err.message)
        }
        return Promise.reject(err)
    }
)

export default api;