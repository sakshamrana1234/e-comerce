import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark Sidebar"
      style={{ width: "180px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none "
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className={`nav-link text-white`} aria-current="page">
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li>
          <Link to="/create-post" className={`nav-link text-white `}>
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;
