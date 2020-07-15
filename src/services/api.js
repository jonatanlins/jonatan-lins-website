import axios from "axios";

export const baseURL = "/api";

const api = axios.create({ baseURL });

export function fetcher(url) {
  return api.get(url).then((response) => response.data);
}

export default api;
