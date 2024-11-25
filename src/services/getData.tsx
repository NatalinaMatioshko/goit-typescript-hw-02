import axios from "axios";
import { Data } from "../types/types";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: { "Accept-Version": "v1" },
});

export function getData(query: string | number, page = 1): Promise<Data> {
  if (!query) {
    return Promise.reject(new Error("Query parameter is required"));
  }

  const params = {
    per_page: 18,
    client_id: "RIJ9LVBIMRvnJqwYvVXA15TOW8yXa2jAEDw7kk7Asog",
    query,
    page,
    orientation: "landscape",
  };

  return Promise.resolve(instance.get<Data>("/search/photos", { params })).then(
    (response) => response.data
  );
}
