

// "use client";

// import Link from "next/link";

// export default function Header() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
//       <div className="container">
//         <Link className="navbar-brand" href="/">
//           <img
//             src="https://digitalindialearning.com/img/logo.png"
//             alt="BookDatings.com"
//             className="navbar-logo"
//             width={70}
//           />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">

//             <li className="nav-item">
//               <Link className="nav-link" href="/">
//                 <i className="fas fa-home me-1"></i>Home
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" href="/post-ad">
//                 <i className="fas fa-plus me-1"></i>Post Ad
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" href="/login">
//                 <i className="fas fa-sign-in-alt me-1"></i>Login
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-link" href="/register">
//                 <i className="fas fa-user-plus me-1"></i>Register
//               </Link>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  console.log("user ==========>",user)

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img
            src="https://digitalindialearning.com/img/logo.png"
            alt="BookDatings.com"
            className="navbar-logo"
            width={70}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" href="/">
                <i className="fas fa-home me-1"></i>Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="/post-ad">
                <i className="fas fa-plus me-1"></i>Post Ad
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                {/* USER DROPDOWN */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-user me-1"></i>
                    {user?.name || "User"}
                  </a>

                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="dropdown-item" href="/profile">
                        <i className="fas fa-user me-2"></i>Profile
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" href="/memberships">
                        <i className="fas fa-crown me-2"></i>Memberships
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" href="/my-membership">
                        <i className="fas fa-crown me-2"></i>My Membership
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" href="/payment-history">
                        <i className="fas fa-credit-card me-2"></i>Payment History
                      </Link>
                    </li>

                    <li>
                      <Link className="dropdown-item" href="/post-ad">
                        <i className="fas fa-plus me-2"></i>Post New Ad
                      </Link>
                    </li>

                    <li><hr className="dropdown-divider" /></li>

                    <li>
                      <button
                        className="dropdown-item"
                        onClick={handleLogout}
                      >
                        <i className="fas fa-sign-out-alt me-2"></i>Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" href="/login">
                    <i className="fas fa-sign-in-alt me-1"></i>Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/register">
                    <i className="fas fa-user-plus me-1"></i>Register
                  </Link>
                </li>
              </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
