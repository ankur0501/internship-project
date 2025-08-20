import React from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";

export const CreateAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="create-account container">
      <div className="card">
        <h1>Welcome to PopX</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        </p>
        <button className="primary-btn" onClick={() => navigate("/signup")}>
          Create Account
        </button>
        <button className="secondary-btn" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};
