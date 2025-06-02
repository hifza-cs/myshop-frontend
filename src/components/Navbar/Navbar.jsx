import { useState } from "react";
import "./Navbar.css"; // Ensure CSS file is correctly linked
import logo from "../../assets/Logo.png"; // Import logo image
import { AppContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
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
    if (res.status === 200) {
      navigate("/login");
    }
  };
  return (
    <>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo-section" onClick={() => setShowModal(true)}>
          <img src={logo} alt="Logo" className="logo-img" />
          <h3>Online Shop</h3>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/shop">
              Shop
            </Link>
          </li>
          {auth?.user && auth?.user ? (
            <Dropdown drop="down">
              <Dropdown.Toggle
                as="div"
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={auth?.user.imgUrl}
                  alt="Profile"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  style={{ color: "green" }}
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </Dropdown.Item>
                <Dropdown.Item style={{ color: "red" }} onClick={handleLogout}>
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              
              
               <li>
            <Link className="link" to="/contact">
            Contact
              </Link>
  </li>
         <li>
                <Link className="link" to="/signup">
                  Sign Up
                </Link>
              </li>


  <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>
              ×
            </span>
            <img src={logo} alt="Logo Preview" className="modal-logo" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
