

// "use client";

// import ProtectedRoute from "../../../components/ProtectedRoute";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../../redux/slices/authSlice";
// import { useRouter } from "next/navigation";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";

// export default function Dashboard() {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { user } = useSelector((state) => state.auth);
//   console.log("user =======>",user)

//   const handleLogout = () => {
//     dispatch(logout());
//     router.push("/login");
//   };

//   return (
//     <ProtectedRoute>
//         <Header />
//       <div className="container mt-5">
//         <h1>Welcome, {user?.name}</h1>
//         <button className="btn btn-danger mt-3" onClick={handleLogout}>
//           Logout
//         </button>
//       </div>
//       <Footer />
//     </ProtectedRoute>
//   );
// }

"use client";

import { useState } from "react";
import ProtectedRoute from "../../../components/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import { useRouter } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("dashboard"); // default tab

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <ProtectedRoute>
      <Header />
      <div className="container-fluid">
        <div className="row min-vh-100">
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 bg-light sidebar p-3">
            <h4 className="mb-4">Hello, {user?.name}</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <button
                  className={`btn w-100 text-start ${
                    activeTab === "dashboard" ? "btn-primary text-white" : "btn-light"
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  Dashboard
                </button>
              </li>
              <li className="nav-item mb-2">
                <button
                  className={`btn w-100 text-start ${
                    activeTab === "posts" ? "btn-primary text-white" : "btn-light"
                  }`}
                  onClick={() => setActiveTab("posts")}
                >
                  Posts
                </button>
              </li>
              <li className="nav-item mb-2">
                <button
                  className={`btn w-100 text-start ${
                    activeTab === "create" ? "btn-primary text-white" : "btn-light"
                  }`}
                  onClick={() => setActiveTab("create")}
                >
                  Create Post
                </button>
              </li>
              <li className="nav-item mb-2">
                <button
                  className={`btn w-100 text-start ${
                    activeTab === "profile" ? "btn-primary text-white" : "btn-light"
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  Profile
                </button>
              </li>
              <li className="nav-item mt-3">
                <button className="btn btn-danger w-100" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 p-4">
            {activeTab === "dashboard" && (
              <div>
                <h2>Dashboard Overview</h2>
                <p>Here you can see your recent activity and stats.</p>
              </div>
            )}
            {activeTab === "posts" && (
              <div>
                <h2>All Posts</h2>
                <p>List of your posts will appear here.</p>
              </div>
            )}
            {activeTab === "create" && (
              <div>
                <h2>Create New Post</h2>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Post Title" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="5" placeholder="Post Content"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            )}
            {activeTab === "profile" && (
              <div>
                <h2>Profile Info</h2>
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </ProtectedRoute>
  );
}

