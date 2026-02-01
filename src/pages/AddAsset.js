import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AssetService from "../services/AssetService";

function AddAsset() {
  const [assetName, setAssetName] = useState("");
  const [assetType, setAssetType] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const navigate = useNavigate();

  const saveAsset = (e) => {
    e.preventDefault();
    AssetService.add({ assetName, assetType }, employeeId).then(() => {
      navigate("/assets");
    });
  };

  return (
    <div className="card shadow">
      <div className="card-header bg-success text-white">
        <h4>Add Asset</h4>
      </div>

      <div className="card-body">
        <form onSubmit={saveAsset}>
          <div className="mb-3">
            <label>Asset Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={e => setAssetName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Asset Type</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={e => setAssetType(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Employee ID</label>
            <input
              type="number"
              className="form-control"
              required
              onChange={e => setEmployeeId(e.target.value)}
            />
          </div>

          <button className="btn btn bg-success text-white w-100">Save Asset</button>
        </form>
      </div>
    </div>
  );
}

export default AddAsset;
