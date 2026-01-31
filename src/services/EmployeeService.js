import axios from "axios";
const BASE = "http://localhost:8080/api/employees";

export default {
  getAll: () => axios.get(`${BASE}/getAll`),
  getById: (id) => axios.get(`${BASE}/getById/${id}`),
  add: (emp, deptId) => axios.post(`${BASE}/add/${deptId}`, emp),
  update: (id, emp) => axios.put(`${BASE}/update/${id}`, emp),
  delete: (id) => axios.delete(`${BASE}/delete/${id}`)
};
