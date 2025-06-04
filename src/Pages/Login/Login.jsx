import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("/login", {
        email: data.email,
        password: data.password,
      });

      if (res.status === 200) {
        navigate("/profile");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid email or password");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
          <h3>Log In</h3>

          <div className="input-group">
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="input-group password-group">
            <input
              type="password"
              placeholder="Your Password"
              aria-label="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
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
