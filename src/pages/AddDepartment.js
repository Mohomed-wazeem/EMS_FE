import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DepartmentService from "../services/DepartmentService";

function AddDepartment() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const saveDepartment = (e) => {
    e.preventDefault();
    DepartmentService.add({ name, location }).then(() => {
      navigate("/departments");
    });
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-success text-white">
        <h4>Add Department</h4>
      </div>

      <div className="card-body">
        <form onSubmit={saveDepartment}>
          <div className="mb-3">
            <label>Department Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={e => setLocation(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-100">Save Department</button>
        </form>
      </div>
    </div>
  );
}

export default AddDepartment;
