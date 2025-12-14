"use client";

import { useState } from "react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // handle password reset logic here
    alert("Password has been reset successfully!");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-sm border-0 rounded-3 p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4 fw-bold text-dark">Reset Password</h3>

        <p className="text-center text-muted small mb-4">
          Enter your new password below to reset your account password.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold">Reset Password</button>
        </form>

        <p className="text-center text-muted mt-3 mb-0 small">
          Remembered your password? <a href="/auth/login" className="text-primary text-decoration-none">Login</a>
        </p>
      </div>
    </div>
  );
}
