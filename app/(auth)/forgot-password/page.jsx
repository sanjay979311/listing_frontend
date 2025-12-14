"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle forgot password logic here
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-sm border-0 rounded-3 p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4 fw-bold text-dark">Forgot Password</h3>

        <p className="text-center text-muted small mb-4">
          Enter your email address below and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit}>
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

          <button type="submit" className="btn btn-primary w-100 fw-semibold">Send Reset Link</button>
        </form>

        <p className="text-center text-muted mt-3 mb-0 small">
          Remember your password? <a href="/auth/login" className="text-primary text-decoration-none">Login</a>
        </p>
      </div>
    </div>
  );
}
