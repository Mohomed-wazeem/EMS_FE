import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">EMS</Link>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Employees</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/departments">Departments</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/assets">Assets</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
