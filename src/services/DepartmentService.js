import axios from "axios";
const BASE = "http://localhost:8080/api/departments";

export default {
  getAll: () => axios.get(`${BASE}/getAll`),
  add: (dept) => axios.post(`${BASE}/add`, dept),
  delete: (id) => axios.delete(`${BASE}/delete/${id}`)
};
