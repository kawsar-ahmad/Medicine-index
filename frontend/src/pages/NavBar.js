import Logo from "../components/Logo";
import NumResults from "../components/NumberofResults";
import Search from "../components/Search";

export default function NavBar({ admin, query, setQuery }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      {admin === "admin" ? (
        <NumResults name="admin" />
      ) : (
        <NumResults name="user" />
      )}
    </nav>
  );
}
