import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeServices";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    EmployeeService.getAllEmployees().then(res => {
      setEmployees(res.data);
    });
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then(() => {
      loadEmployees();
    });
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-white">
        <h4>Employee List</h4>
      </div>
      <div className="card-body table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.salary}</td>
                <td>{emp.department?.name}</td>
                <td>
                  <button 
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteEmployee(emp.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
