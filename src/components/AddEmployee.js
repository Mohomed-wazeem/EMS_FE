import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [deptId, setDeptId] = useState("");

  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault();

    const employee = { name, salary };

    EmployeeService.addEmployee(employee, deptId)
      .then(() => navigate("/"))
      .catch(err => console.log(err));
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-success text-white">
        <h4>Add Employee</h4>
      </div>
      <div className="card-body">
        <form onSubmit={saveEmployee}>
          <div className="mb-3">
            <label>Name</label>
            <input 
              type="text"
              className="form-control"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Salary</label>
            <input 
              type="number"
              className="form-control"
              required
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Department ID</label>
            <input 
              type="number"
              className="form-control"
              required
              onChange={(e) => setDeptId(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-100">Save</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
