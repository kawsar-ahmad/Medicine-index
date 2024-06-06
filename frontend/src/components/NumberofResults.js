import { Link } from "react-router-dom";

export default function NumResults({ name }) {
  return (
    <div className="home-login-btn">
      {name === "admin" ? (
        <>
          <Link to="/">
            <strong>Logout</strong>
          </Link>

          <Link to="/admin/add">
            <strong>Add New Medicine</strong>
          </Link>
        </>
      ) : (
        <>
          <Link to="/">
            <strong>Home</strong>
          </Link>

          <Link to="/login">
            <strong>Login as Admin</strong>
          </Link>
        </>
      )}
    </div>
  );
}
