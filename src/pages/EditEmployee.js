// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import EmployeeService from "../services/EmployeeService";
// import DepartmentService from "../services/DepartmentService";

// function EditEmployee() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [salary, setSalary] = useState("");
//   const [departmentId, setDepartmentId] = useState("");
//   const [departments, setDepartments] = useState([]);

//   useEffect(() => {
//     loadEmployee();
//     loadDepartments();
//   }, []);

//   const loadEmployee = () => {
//     EmployeeService.getById(id).then(res => {
//       setName(res.data.name);
//       setSalary(res.data.salary);
//       setDepartmentId(res.data.department?.id);
//     });
//   };

//   const loadDepartments = () => {
//     DepartmentService.getAll().then(res => {
//       setDepartments(res.data);
//     });
//   };

//   const updateEmployee = (e) => {
//     e.preventDefault();

//     const updatedEmployee = {
//       name,
//       salary
//     };

//     EmployeeService.update(id, updatedEmployee, departmentId).then(() => {
//       navigate("/employees");
//     });
//   };

//   return (
//     <div className="card shadow">
//       <div className="card-header bg-primary text-white">
//         <h4>Edit Employee</h4>
//       </div>

//       <div className="card-body">
//         <form onSubmit={updateEmployee}>
//           <div className="mb-3">
//             <label>Employee Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               required
//               onChange={e => setName(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Salary</label>
//             <input
//               type="number"
//               className="form-control"
//               value={salary}
//               required
//               onChange={e => setSalary(e.target.value)}
//             />
//           </div>

//           <div className="mb-3">
//             <label>Department</label>
//             <select
//               className="form-select"
//               value={departmentId}
//               required
//               onChange={e => setDepartmentId(e.target.value)}
//             >
//               <option value="">Select Department</option>
//               {departments.map(dept => (
//                 <option key={dept.id} value={dept.id}>
//                   {dept.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <button className="btn btn-success w-100">
//             Update Employee
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EditEmployee;


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import DepartmentService from "../services/DepartmentService";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    loadEmployee();
    loadDepartments();
  }, []);

  const loadEmployee = () => {
    EmployeeService.getById(id).then(res => {
      setName(res.data.name);
      setSalary(res.data.salary);
      setDepartmentId(res.data.department?.id || "");
    });
  };

  const loadDepartments = () => {
    DepartmentService.getAll().then(res => {
      setDepartments(res.data);
    });
  };

  const updateEmployee = (e) => {
    e.preventDefault();

    const updatedEmployee = {
      name,
      salary,
      department: { id: departmentId } // include department id here
    };

    EmployeeService.update(id, updatedEmployee).then(() => {
      navigate("/employees"); // make sure route exists
    });
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-white">
        <h4>Edit Employee</h4>
      </div>
      <div className="card-body">
        <form onSubmit={updateEmployee}>
          <div className="mb-3">
            <label>Employee Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              required
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Salary</label>
            <input
              type="number"
              className="form-control"
              value={salary}
              required
              onChange={e => setSalary(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Department</label>
            <select
              className="form-select"
              value={departmentId}
              required
              onChange={e => setDepartmentId(e.target.value)}
            >
              <option value="">Select Department</option>
              {departments.map(dept => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>

          <button className="btn btn-success w-100">
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
