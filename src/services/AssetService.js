import axios from "axios";
const BASE = "http://localhost:8080/api/assets";

export default {
  getAll: () => axios.get(`${BASE}/getAll`),
  add: (asset, empId) => axios.post(`${BASE}/add/${empId}`, asset),
  delete: (id) => axios.delete(`${BASE}/delete/${id}`)
};
