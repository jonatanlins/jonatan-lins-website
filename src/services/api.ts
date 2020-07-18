import axios from "axios";

export const baseURL = "/api";

const api = axios.create({ baseURL });

export async function fetcher(url: string): Promise<unknown> {
  const response = await api.get(url);
  return response.data;
}

export default api;
