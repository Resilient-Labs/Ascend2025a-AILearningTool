import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const api = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Generic request functions
const get = async <T>(path: string): Promise<T> => {
  const response = await api.get<T>(path);
  return response.data;
};

const post = async <T>(path: string, payload: unknown): Promise<T> => {
  const response = await api.post<T>(path, payload);
  return response.data;
};

const put = async <T>(path: string, payload: unknown): Promise<T> => {
  const response = await api.put<T>(path, payload);
  return response.data;
};

const remove = async (path: string): Promise<void> => {
  await api.delete(path);
};

export default {
  get,
  post,
  put,
  remove,
};
