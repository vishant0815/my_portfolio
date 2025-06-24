import axios from 'axios';

const API = axios.create({
  baseURL: "https://my-portfolio-9xry.onrender.com/api/",
});

export default API;
