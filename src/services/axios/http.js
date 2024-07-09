import axios from "axios";

const BASE_URL = process.env.BASE_URL;
console.log(BASE_URL);
const api = axios.create({
  baseURL: "http://localhost:5000",
});

export default api;
