import axios from "axios";

axios.defaults.withCredentials = true;

/* for hitting backend specifically */
const buildUrl = (endpoint: string) => {
  const baseUrl = "http://localhost:4444"; // TODO: resolve via env on build add prod api
  return baseUrl + "/api/v1" + endpoint;
};

export const apiCall = {
  get: <T>(endpoint: string): Promise<T> => {
    return axios.get(buildUrl(endpoint)).then((res) => res.data);
  },
  post: <T>(endpoint: string, body?: any): Promise<T> => {
    return axios.post(buildUrl(endpoint), body).then((res) => res.data);
  },
};
