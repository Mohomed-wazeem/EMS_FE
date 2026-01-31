import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    EmployeeService.getAll().then(res => setEmployees(res.data));
  };

  const remove = (id) => {
    EmployeeService.delete(id).then(load);
  };

  return (
    <div className="card shadow">
      <div className="card-header d-flex justify-content-between">
        <h4>Employees</h4>
        <Link className="btn btn-success" to="/add-employee">Add</Link>
      </div>

      <div className="card-body table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Salary</th><th>Department</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(e => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.salary}</td>
                <td>{e.department?.name}</td>
                <td>
                  <Link className="btn btn-sm btn-primary me-2" to={`/edit-employee/${e.id}`}>Edit</Link>
                  <button className="btn btn-sm btn-danger" onClick={() => remove(e.id)}>Delete</button>
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
