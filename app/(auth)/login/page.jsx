

// "use client";

// import { useState } from "react";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";


// import { useLoginMutation } from "../../../redux/services/authApi";

// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../../../redux/slices/authSlice";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const [login, { isLoading }] = useLoginMutation();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await login({ email, password }).unwrap();

//       // Store in Redux
//       dispatch(loginSuccess(res));

//       // Redirect user
//       router.push("/dashboard");
//     } catch (err) {
//       console.log("Login failed:", err);
//       setErrorMsg(err?.data?.message || "Invalid credentials");
//     }
//   };

//   return (
//     <>
//       <Header />

//       <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
//         <div className="card shadow-sm border-0 rounded-3 p-4" style={{ maxWidth: "400px", width: "100%" }}>
//           <h3 className="text-center mb-4 fw-bold text-dark">Login</h3>

//           {/* ERROR MESSAGE */}
//           {errorMsg && (
//             <div className="alert alert-danger py-2 small text-center">
//               {errorMsg}
//             </div>
//           )}

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control form-control-lg"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control form-control-lg"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <div className="form-check">
//                 <input className="form-check-input" type="checkbox" id="rememberMe" />
//                 <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
//               </div>
//               <a href="/forgot-password" className="text-primary text-decoration-none small">Forgot?</a>
//             </div>

//             <button type="submit" className="btn btn-primary w-100 fw-semibold" disabled={isLoading}>
//               {isLoading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <p className="text-center text-muted mt-3 mb-0 small">
//             Don't have an account? <a href="/register" className="text-primary text-decoration-none">Register</a>
//           </p>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }


"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { loginSuccess } from "../../../redux/slices/authSlice";
import { useLoginMutation } from "../../../redux/services/authApi";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log("Login response:", res);

      // Map API response correctly
      dispatch(
        loginSuccess({
          token: res.accessToken, // adjust according to your API
          user: res.user,
        })
      );

      router.push("/dashboard");
    } catch (err) {
      console.log("Login failed:", err);
      setErrorMsg(err?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow" style={{ maxWidth: 400, width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>

        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-primary w-100" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
