import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DepartmentService from "../services/DepartmentService";
import EmployeeService from "../services/EmployeeService";

function DepartmentList() {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadDepartments();
    loadEmployees();
  }, []);

  const loadDepartments = () => {
    DepartmentService.getAll().then(res => {
      setDepartments(res.data);
    });
  };

  const loadEmployees = () => {
    EmployeeService.getAll().then(res => {
      setEmployees(res.data);
    });
  };

  const isDepartmentUsed = (deptId) => {
    return employees.some(emp => emp.department?.id === deptId);
  };

  const deleteDepartment = (id) => {
    if (isDepartmentUsed(id)) {
      alert("Cannot delete this department. Employees are assigned to it.");
      return;
    }

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
                <td colSpan="4" className="text-center">
                  No Departments Found
                </td>
              </tr>
            ) : (
              departments.map(dept => {
                const used = isDepartmentUsed(dept.id);

                return (
                  <tr key={dept.id}>
                    <td>{dept.id}</td>
                    <td>{dept.name}</td>
                    <td>{dept.location}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        disabled={used}
                        onClick={() => deleteDepartment(dept.id)}
                        title={
                          used
                            ? "Department is assigned to employees"
                            : "Delete department"
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DepartmentList;
