
import "../App.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await API.post(
        "/auth/login",
        formData
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

return (
  <div className="auth-container">
    <div className="auth-card">

      <h1>TASK PILOT</h1>

      <p className="auth-subtitle">
         Plan • Track • Achieve
      </p>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />

      <button
        className="auth-btn"
        onClick={handleSubmit}
      >
        Login
      </button>

      <p className="auth-link">
        Don't have an account?{" "}
        <Link to="/register">
          Register
        </Link>
            </p>

    </div>
  </div>
);
}

export default Login;