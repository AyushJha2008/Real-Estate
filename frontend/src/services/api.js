import axios from "axios";

const API = axios.create({
  baseURL: "https://real-estate-wkxg.onrender.com/", // backend URL
});

export default API;
