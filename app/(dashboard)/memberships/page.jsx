// "use client";

// import Link from "next/link";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";

// export default function MembershipsPage() {
//   const plans = [
//     {
//       name: "Basic Plan",
//       price: "₹499 / month",
//       features: [
//         "5 Ad Posts",
//         "Standard Visibility",
//         "Basic Support",
//         "Profile Badge",
//       ],
//       button: "Choose Basic",
//       link: "/checkout/basic",
//       color: "primary",
//     },
//     {
//       name: "Premium Plan",
//       price: "₹999 / month",
//       features: [
//         "Unlimited Ad Posts",
//         "Top Listing Priority",
//         "Premium Support",
//         "Verified Badge",
//         "Unlock All Premium Profiles",
//       ],
//       button: "Choose Premium",
//       link: "/checkout/premium",
//       color: "success",
//       popular: true,
//     },
//     {
//       name: "Super VIP Plan",
//       price: "₹1,999 / month",
//       features: [
//         "Unlimited Premium Ads",
//         "Homepage Visibility",
//         "Dedicated VIP Support",
//         "VIP Badge",
//         "Exclusive Leads",
//         "Boosted Profile Every Week",
//       ],
//       button: "Go Super VIP",
//       link: "/checkout/vip",
//       color: "warning",
//     },
//   ];

//   return (
//     <>
//       <Header />

//       <div className="container py-5">
//         <h1 className="text-center mb-4">Membership Plans</h1>
//         <p className="text-center text-muted mb-5">
//           Choose a plan that suits your needs. Upgrade anytime!
//         </p>

//         <div className="row g-4">
//           {plans.map((plan, index) => (
//             <div className="col-md-4" key={index}>
//               <div className="card shadow-sm h-100 border-0 d-flex flex-column position-relative">

//                 {plan.popular && (
//                   <div className="badge bg-success position-absolute top-0 end-0 m-2">
//                     Most Popular
//                   </div>
//                 )}

//                 <div className="card-body text-center d-flex flex-column">
//                   <h3 className="card-title">{plan.name}</h3>
//                   <h2 className="text-primary fw-bold mt-3">{plan.price}</h2>

//                   <ul className="list-group list-group-flush mt-4">
//                     {plan.features.map((feature, i) => (
//                       <li className="list-group-item" key={i}>
//                         <i className="fas fa-check-circle text-success me-2"></i>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <Link
//                     href={plan.link}
//                     className={`btn btn-${plan.color} mt-auto w-100 fw-bold`}
//                   >
//                     {plan.button}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-4">
//           <Link href="/" className="btn btn-outline-dark">
//             <i className="fas fa-arrow-left me-2"></i>Back to Home
//           </Link>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }


"use client";

import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import {
  FaCrown,
  FaCheckCircle,
  FaBullhorn,
  FaStar,
  FaCheck,
  FaCreditCard,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

export default function MembershipsPage() {
  return (
    <>
      <Header />

      <div className="container my-4">

        <div className="container py-5">

          {/* HEADER */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">
              <FaCrown className="me-3" />
              Membership Plans
            </h1>
            <p className="lead text-muted">
              Choose the perfect plan to boost your classified ads and reach more customers
            </p>
          </div>

          {/* CURRENT MEMBERSHIP */}
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm bg-gradient-success text-white">
                <div className="card-body text-center py-4">
                  <FaCheckCircle className="fa-3x mb-3" />
                  <h4 className="mb-2">Active Membership: Basic</h4>
                  <p className="mb-3">Expires on Dec 13, 2025</p>

                  <div className="row text-center">
                    <div className="col-md-4">
                      <div className="border-end border-light">
                        <h5>/100</h5>
                        <small>Ads Posted</small>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="border-end border-light">
                        <h5>0/100</h5>
                        <small>Top Ads Used</small>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <h5>-1.818814578287</h5>
                      <small>Days Remaining</small>
                    </div>
                  </div>

                  <Link href="/my-membership" className="btn btn-light mt-3">
                    <FaCog className="me-2" />
                    Manage Membership
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* MEMBERSHIP PLANS */}
          <div className="row justify-content-center">

            {/* PLAN 1 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm membership-card border-info">
                <div className="card-header text-center bg-light">
                  <h4 className="mb-0 text-dark">Admin for Custom</h4>
                </div>

                <div className="card-body text-center">
                  <div className="mb-4">
                    <div className="display-4 fw-bold text-primary">₹10.00</div>
                    <small className="text-muted">for 30 days</small>
                  </div>

                  <p className="text-muted mb-4">Admin</p>

                  <ul className="list-unstyled text-start">
                    <li className="mb-3">
                      <FaBullhorn className="text-primary me-2" />
                      <strong>10000</strong> Ads
                    </li>

                    <li className="mb-3">
                      <FaStar className="text-warning me-2" />
                      <strong>10000</strong> Top Ads
                    </li>

                    <li className="mb-3">
                      <FaCheck className="text-success me-2" />
                      All
                    </li>

                    <li className="mb-3">
                      <FaCheck className="text-success me-2" />
                      Custom
                    </li>
                  </ul>
                </div>

                <div className="card-footer bg-light border-0">
                  <form method="post" action="https://bookdatings.com/memberships/7/purchase">
                    <button type="submit" className="btn btn-outline-info w-100">
                      <FaCreditCard className="me-2" />
                      Choose Plan
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* PLAN 2 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm membership-card border-success">
                <div className="card-header text-center bg-gradient-success text-white position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge bg-warning text-dark">
                      <FaStar className="me-1" />
                      POPULAR
                    </span>
                  </div>
                  <h4 className="mb-0 mt-2">Basic</h4>
                </div>

                <div className="card-body text-center">
                  <div className="mb-4">
                    <div className="display-4 fw-bold text-primary">₹5,000.00</div>
                    <small className="text-muted">for 7 days</small>
                  </div>

                  <p className="text-muted mb-4">Pay by scanner</p>

                  <ul className="list-unstyled text-start">
                    <li className="mb-3">
                      <FaBullhorn className="text-primary me-2" />
                      <strong>100</strong> Ads
                    </li>

                    <li className="mb-3">
                      <FaStar className="text-warning me-2" />
                      <strong>100</strong> Top Ads
                    </li>

                    <li className="mb-3">
                      <FaCheck className="text-success me-2" />
                      100 Top Ads For 7 Days
                    </li>

                    <li className="mb-3">
                      <FaCheck className="text-success me-2" />
                      Payment contact for contact@scooro.com
                    </li>
                  </ul>
                </div>

                <div className="card-footer bg-light border-0">
                  <button className="btn btn-outline-success w-100" disabled>
                    <FaCheck className="me-2" />
                    Current Plan
                  </button>
                </div>
              </div>
            </div>

            {/* PLAN 3 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm membership-card border-success">
                <div className="card-header text-center bg-gradient-success text-white position-relative">
                  <div className="position-absolute top-0 start-50 translate-middle">
                    <span className="badge bg-warning text-dark">
                      <FaStar className="me-1" />
                      POPULAR
                    </span>
                  </div>
                  <h4 className="mb-0 mt-2">30 Days</h4>
                </div>

                <div className="card-body text-center">
                  <div className="mb-4">
                    <div className="display-4 fw-bold text-primary">₹129,000.00</div>
                    <small className="text-muted">for 30 days</small>
                  </div>

                  <p className="text-muted mb-4">Long Term</p>

                  <ul className="list-unstyled text-start">
                    <li className="mb-3">
                      <FaBullhorn className="text-primary me-2" />
                      <strong>10000</strong> Ads
                    </li>

                    <li className="mb-3">
                      <FaStar className="text-warning me-2" />
                      <strong>10000</strong> Top Ads
                    </li>
                  </ul>
                </div>

                <div className="card-footer bg-light border-0">
                  <form method="post" action="https://bookdatings.com/memberships/8/purchase">
                    <button type="submit" className="btn btn-success w-100">
                      <FaCreditCard className="me-2" />
                      Choose Plan
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>

          {/* COMPARISON TABLE */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="mb-0 text-center">
                    <FaChartBar className="me-2" />
                    Plan Comparison
                  </h5>
                </div>

                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>Feature</th>
                          <th className="text-center">Admin for Custom</th>
                          <th className="text-center">Basic</th>
                          <th className="text-center">30 Days</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td><strong>Monthly Price</strong></td>
                          <td className="text-center"><span className="badge bg-primary">₹10.00</span></td>
                          <td className="text-center"><span className="badge bg-primary">₹5,000.00</span></td>
                          <td className="text-center"><span className="badge bg-primary">₹129,000.00</span></td>
                        </tr>

                        <tr>
                          <td><strong>Number of Ads</strong></td>
                          <td className="text-center">10000</td>
                          <td className="text-center">100</td>
                          <td className="text-center">10000</td>
                        </tr>

                        <tr>
                          <td><strong>Top Ads</strong></td>
                          <td className="text-center"><FaCheck className="text-success" /> 10000</td>
                          <td className="text-center"><FaCheck className="text-success" /> 100</td>
                          <td className="text-center"><FaCheck className="text-success" /> 10000</td>
                        </tr>

                      </tbody>

                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* EXTRA CSS */}
      <style jsx>{`
        .bg-gradient-success {
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
        }
        .membership-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
        }
        .border-info { border-color: #0dcaf0 !important; border-width: 2px !important; }
        .border-success { border-color: #198754 !important; border-width: 2px !important; }
        .border-warning { border-color: #ffc107 !important; border-width: 2px !important; }
      `}</style>

      <Footer />
    </>
  );
}
