import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <h1 className="logo">anime list</h1>
      <div className="menuItems">
        <Link to="/">Home</Link>
        <Link to="/randomanime">List of Anime</Link>
        <Link to="/aboutme">About Me</Link>
      </div>
    </nav>
  );
}
export default Navbar;
