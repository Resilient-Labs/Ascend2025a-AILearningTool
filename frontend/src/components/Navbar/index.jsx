import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <span>Ascend Learning Tool</span>
    </div>
    <ul className="navbar-links">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
      <li>
        <Link to="/concept-tagger">Concept Tagger</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;