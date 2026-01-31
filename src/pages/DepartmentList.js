import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DepartmentService from "../services/DepartmentService";

function DepartmentList() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = () => {
    DepartmentService.getAll().then(res => {
      setDepartments(res.data);
    });
  };

  const deleteDepartment = (id) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      DepartmentService.delete(id).then(() => loadDepartments());
    }
  };

  return (
    <div className="card shadow">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h4>Departments</h4>
        <Link to="/add-department" className="btn btn-success">
          Add Department
        </Link>
      </div>

      <div className="card-body table-responsive">
        <table className="table table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center">No Departments Found</td>
              </tr>
            ) : (
              departments.map(dept => (
                <tr key={dept.id}>
                  <td>{dept.id}</td>
                  <td>{dept.name}</td>
                  <td>{dept.location}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteDepartment(dept.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DepartmentList;
