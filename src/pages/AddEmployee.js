import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function AddEmployee() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [deptId, setDeptId] = useState("");

  const navigate = useNavigate();

  const save = (e) => {
    e.preventDefault();
    EmployeeService.add({ name, salary }, deptId).then(() => navigate("/"));
  };

  return (
    <div className="card shadow">
      <div className="card-header">Add Employee</div>
      <div className="card-body">
        <form onSubmit={save}>
          <input className="form-control mb-3" placeholder="Name" onChange={e => setName(e.target.value)} />
          <input className="form-control mb-3" placeholder="Salary" onChange={e => setSalary(e.target.value)} />
          <input className="form-control mb-3" placeholder="Department ID" onChange={e => setDeptId(e.target.value)} />
          <button className="btn btn-success w-100">Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
