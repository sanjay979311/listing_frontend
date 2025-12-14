// "use client";

// import { useSearchParams } from "next/navigation";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";

// export default function MyMembership() {
//   const params = useSearchParams();
//   const selectedPlan = params.get("plan") || null;

//   return (
//     <>
//       <Header />

//       <div className="container py-5">
//         <h2 className="fw-bold text-center mb-4">My Membership</h2>

//         <div className="card shadow p-4 mx-auto" style={{ maxWidth: "550px" }}>
//           <h4 className="mb-3">
//             <strong>Active Plan: </strong>
//             {selectedPlan ? selectedPlan : "No Active Membership"}
//           </h4>

//           {!selectedPlan ? (
//             <>
//               <p>You currently do not have any active membership.</p>
//               <p className="text-muted">Purchase a plan to unlock premium features.</p>
//             </>
//           ) : (
//             <>
//               <p>
//                 Thank you for subscribing to the{" "}
//                 <strong>{selectedPlan}</strong>!
//               </p>
//               <p className="text-muted">
//                 Your membership is active and valid for 30 days.
//               </p>

//               <button className="btn btn-danger w-100 mt-3">
//                 Cancel Membership
//               </button>
//             </>
//           )}
//         </div>

//         <div className="text-center mt-4">
//           <a href="/memberships" className="btn btn-outline-primary">
//             View All Plans
//           </a>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";
import "./style.css";

export default function Membership() {
  const currentMembership = {
    plan: "Basic Plan",
    description: "Pay by scanner",
    started: "Dec 06, 2025",
    expires: "Dec 13, 2025",
    amount: "$5,000.00",
    method: "Bank transfer",
    daysRemaining: -1.778,
    progressPercent: 125.4,
  };

  const usageStats = {
    adsPosted: { used: 0, limit: 100 },
    topAds: { used: 0, limit: 100 },
  };

  const membershipHistory = [
    { plan: "Basic", type: "Pay by scanner", duration: "Dec 06, 2025 - Dec 13, 2025", amount: "₹0.00", status: "Active", date: "Dec 06, 2025" },
    { plan: "Admin for Custom", type: "Admin", duration: "Nov 29, 2025 - Dec 06, 2025", amount: "₹0.00", status: "Cancelled", date: "Nov 29, 2025" },
    { plan: "Admin for Custom", type: "Admin", duration: "Nov 19, 2025 - Nov 26, 2025", amount: "₹0.00", status: "Cancelled", date: "Nov 19, 2025" },
    { plan: "Basic", type: "Pay by scanner", duration: "Aug 25, 2025 - Sep 01, 2025", amount: "₹0.00", status: "Cancelled", date: "Aug 25, 2025" },
  ];

  const benefits = [
    { icon: "fa-bullhorn text-primary", label: "100 Ads" },
    { icon: "fa-star text-warning", label: "100 Top Ads" },
    { icon: "fa-check text-success", label: "100 Top Ads For 7 Days" },
    { icon: "fa-check text-success", label: "Payment contact for contact@scooro.com" },
  ];

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            {/* Current Membership */}
            <div className="card mb-4 shadow-sm membership-card">
              <div className="card-header membership-header text-white">
                <h4>
                  <i className="fas fa-crown me-2"></i>Current Membership
                </h4>
              </div>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-8">
                    <h5>{currentMembership.plan}</h5>
                    <p className="text-muted">{currentMembership.description}</p>
                    <div className="row">
                      <div className="col-sm-6 mb-2">
                        <strong>Started:</strong> {currentMembership.started}
                      </div>
                      <div className="col-sm-6 mb-2">
                        <strong>Expires:</strong> {currentMembership.expires}
                      </div>
                      <div className="col-sm-6 mb-2">
                        <strong>Amount Paid:</strong> {currentMembership.amount}
                      </div>
                      <div className="col-sm-6 mb-2">
                        <strong>Payment Method:</strong> {currentMembership.method}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="mb-3">
                      <div className="display-6 fw-bold text-success">
                        {currentMembership.daysRemaining.toFixed(2)}
                      </div>
                      <small className="text-muted">Days Remaining</small>
                    </div>
                    <div className="progress mb-2 progress-custom">
                      <div
                        className="progress-bar bg-success"
                        style={{ width: `${currentMembership.progressPercent}%` }}
                      ></div>
                    </div>
                    <small className="text-muted">{currentMembership.progressPercent}% used</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header bg-light">
                <h5>
                  <i className="fas fa-chart-bar me-2"></i>Usage Statistics
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {Object.entries(usageStats).map(([key, stat], idx) => (
                    <div className="col-md-6 mb-3" key={idx}>
                      <div className="d-flex align-items-center">
                        <i
                          className={`fas ${key === "adsPosted" ? "fa-bullhorn text-primary" : "fa-star text-warning"} fa-2x flex-shrink-0`}
                        ></i>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="mb-1">{key === "adsPosted" ? "Ads Posted" : "Top Ads Used"}</h6>
                          <div className="progress progress-custom">
                            <div
                              className={`progress-bar ${key === "topAds" ? "bg-warning" : ""}`}
                              style={{ width: `${(stat.used / stat.limit) * 100}%` }}
                            ></div>
                          </div>
                          <small className="text-muted">
                            {stat.used}/{stat.limit}
                          </small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Membership History */}
            <div className="card shadow-sm">
              <div className="card-header bg-light">
                <h5>
                  <i className="fas fa-history me-2"></i>Membership History
                </h5>
              </div>
              <div className="card-body table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Plan</th>
                      <th>Duration</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {membershipHistory.map((item, idx) => (
                      <tr key={idx}>
                        <td>
                          <strong>{item.plan}</strong>
                          <br />
                          <small className="text-muted">{item.type}</small>
                        </td>
                        <td>{item.duration}</td>
                        <td>{item.amount}</td>
                        <td>
                          <span className={`badge ${item.status === "Active" ? "bg-success" : "bg-danger"}`}>
                            {item.status}
                          </span>
                        </td>
                        <td>{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4">
            {/* Quick Actions */}
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-light">
                <h6>
                  <i className="fas fa-bolt me-2"></i>Quick Actions
                </h6>
              </div>
              <div className="card-body">
                <div className="d-grid gap-2">
                  <Link href="https://bookdatings.com/memberships" className="btn btn-outline-primary">
                    <i className="fas fa-shopping-cart me-2"></i>Browse Plans
                  </Link>
                  <Link href="https://bookdatings.com/post-ad" className="btn btn-outline-success">
                    <i className="fas fa-plus me-2"></i>Post New Ad
                  </Link>
                  <Link href="https://bookdatings.com/profile" className="btn btn-outline-info">
                    <i className="fas fa-user me-2"></i>View Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="card shadow-sm">
              <div className="card-header bg-light">
                <h6>
                  <i className="fas fa-gift me-2"></i>Your Benefits
                </h6>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {benefits.map((item, idx) => (
                    <li key={idx} className="mb-2">
                      <i className={`fas ${item.icon} me-2`}></i>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
