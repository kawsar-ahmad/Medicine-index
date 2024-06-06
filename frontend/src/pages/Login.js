import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "1234") {
      // alert("Login Successful");
      navigate("/admin");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div className="login">
      <h1>Welcome to MedShop</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
