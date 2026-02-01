import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

import DepartmentList from "./pages/DepartmentList";
import AddDepartment from "./pages/AddDepartment";

import AssetList from "./pages/AssetList";
import AddAsset from "./pages/AddAsset";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
          <Route path="/employees" element={<EmployeeList />} />


          <Route path="/departments" element={<DepartmentList />} />
          <Route path="/add-department" element={<AddDepartment />} />

          <Route path="/assets" element={<AssetList />} />
          <Route path="/add-asset" element={<AddAsset />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
