// src/api/userApi.js
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = () => {
  return axios.get(`${BASE_URL}/users`);
};
