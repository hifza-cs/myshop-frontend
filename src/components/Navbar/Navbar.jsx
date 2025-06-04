import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import { AppContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const auth = AppContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleLogout = async () => {
    const res = await auth?.logout();
    if (res?.status === 200) {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="left-section" onClick={() => setShowModal(true)}>
          <img src={logo} alt="Logo" className="logo-img" />
          <div className="search-cart">
            <input type="text" className="search-input" placeholder="Search..." />
            <FiSearch className="icon-btn" />
            <FiShoppingCart className="icon-btn" />
          </div>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className="link" to="/about">About</Link></li>
          <li><Link className="link" to="/shop">Shop</Link></li>
          {auth?.user ? (
            <Dropdown drop="down">
              <Dropdown.Toggle as="div" style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <img src={auth?.user.imgUrl} alt="Profile" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item style={{ color: "green" }} onClick={() => navigate("/profile")}>Profile</Dropdown.Item>
                <Dropdown.Item style={{ color: "red" }} onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <li><Link className="link" to="/contact">Contact</Link></li>
              <li><Link className="link" to="/signup">Sign Up</Link></li>
              <li><Link className="link" to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>×</span>
            <img src={logo} alt="Logo Preview" className="modal-logo" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
