import "./Signup.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AuthContext.jsx";
const Signup = () => {
  const auth = AppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const res = await auth?.signup(form);
    if (res?.status === 200) {
      window.location.href = "/profile";
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-content">
        <form onSubmit={handleSubmit} className="signup-form">
          <h3>Sign Up</h3>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              aria-label="Name"
            />
          </div>
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
          <div className="input-group">
            <input type="file" name="image" />
          </div>
          <button type="submit">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
