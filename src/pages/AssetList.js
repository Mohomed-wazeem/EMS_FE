import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AssetService from "../services/AssetService";

function AssetList() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = () => {
    AssetService.getAll().then(res => {
      setAssets(res.data);
    });
  };

  const deleteAsset = (id) => {
    if (window.confirm("Delete this asset?")) {
      AssetService.delete(id).then(() => loadAssets());
    }
  };

  return (
    <div className="card shadow">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h4>Assets</h4>
        <Link to="/add-asset" className="btn btn-success">
          Add Asset
        </Link>
      </div>

      <div className="card-body table-responsive">
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Asset Name</th>
              <th>Type</th>
              <th>Employee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">No Assets Found</td>
              </tr>
            ) : (
              assets.map(asset => (
                <tr key={asset.id}>
                  <td>{asset.id}</td>
                  <td>{asset.assetName}</td>
                  <td>{asset.assetType}</td>
                  <td>{asset.employee?.name}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteAsset(asset.id)}
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

export default AssetList;
