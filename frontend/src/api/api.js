import axios from "axios";

const API = axios.create({
  baseURL:  "https://task-pilot-misbah.onrender.com",
});

export default API;