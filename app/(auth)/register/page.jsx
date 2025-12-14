"use client";

import { useState } from "react";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle registration logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div className="card shadow-sm border-0 rounded-3 p-4" style={{ maxWidth: "400px", width: "100%" }}>
          <h3 className="text-center mb-4 fw-bold text-dark">Register</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 fw-semibold">Register</button>
          </form>

          <p className="text-center text-muted mt-3 mb-0 small">
            Already have an account? <a href="/login" className="text-primary text-decoration-none">Login</a>
          </p>
        </div>
      </div>
      <Footer />
    </>



  );
}
