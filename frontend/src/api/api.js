import axios from "axios";

const API = axios.create({
  baseURL: "https://task-pilot-misbah.onrender.com/api",
});

export default API;