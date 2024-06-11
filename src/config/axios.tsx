import axios from "axios";
import config from "./env.config";

// config axios

const API = axios.create({
  baseURL: config.serverUrl,
});

export default API;
