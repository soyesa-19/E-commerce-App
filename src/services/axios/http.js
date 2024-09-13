import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = JSON.parse(localStorage.getItem("okta-token-storage"))
      .accessToken.accessToken;
    console.log(token);

    // If the token exists, attach it to the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle errors related to request interception
    return Promise.reject(error);
  }
);

export default api;
