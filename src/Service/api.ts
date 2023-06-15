import axios from "axios";

const api = axios.create({
  baseURL: "https://apinotepadbootstrap.onrender.com/",
});

export default api;
