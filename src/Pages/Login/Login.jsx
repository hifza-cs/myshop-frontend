import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const res = await axios.post("/login", { email, password });
    if (res.status === 200) {
      window.location.href = "/profile";
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-content">
        <form onSubmit={handleSubmit} className="signup-form">
          <h3>Log In</h3>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              aria-label="Email"
            />
          </div>
          <div className="input-group password-group">
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              required
              aria-label="Password"
            />
          </div>
          <button type="submit">
            <i className="fas fa-sign-in-alt"></i> Log In
          </button>
        </form>

        <p className="login-link">
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
