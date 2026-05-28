import {
  FaBook,
  FaHeart,
  FaChartBar,
  FaUser,
  FaCog,
  FaShieldAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="sidebar">

      <h2 className="logo">
        📚 Livraria
      </h2>

      <ul className="menu-sidebar">

        <li>
          <Link to="/">
            <FaBook />
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/autores">
            <FaUser />
            <span>Autores</span>
          </Link>
        </li>

        <li>
          <Link to="/privacy">
            <FaShieldAlt />
            <span>Privacy</span>
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;