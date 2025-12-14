// "use client";

// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";

// export default function PaymentHistoryPage() {
//   // Dummy payment history – you can replace with DB data later
//   const payments = [
//     {
//       id: 1,
//       plan: "Basic Plan",
//       amount: "₹499",
//       date: "2025-01-09",
//       status: "Success",
//       transactionId: "TXN123456",
//     },
//     {
//       id: 2,
//       plan: "Premium Plan",
//       amount: "₹999",
//       date: "2025-01-15",
//       status: "Success",
//       transactionId: "TXN789012",
//     },
//     {
//       id: 3,
//       plan: "Super VIP",
//       amount: "₹1,999",
//       date: "2025-02-01",
//       status: "Failed",
//       transactionId: "TXN456789",
//     }
//   ];

//   return (
//     <>
//       <Header />

//       <div className="container py-5">
//         <h2 className="fw-bold text-center mb-4">Payment History</h2>

//         <div className="table-responsive shadow-sm rounded">
//           <table className="table table-bordered table-striped">
//             <thead className="table-dark">
//               <tr>
//                 <th>#</th>
//                 <th>Plan</th>
//                 <th>Amount</th>
//                 <th>Date</th>
//                 <th>Status</th>
//                 <th>Transaction ID</th>
//               </tr>
//             </thead>

//             <tbody>
//               {payments.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="text-center py-3">
//                     No payment records found.
//                   </td>
//                 </tr>
//               ) : (
//                 payments.map((p, index) => (
//                   <tr key={p.id}>
//                     <td>{index + 1}</td>
//                     <td>{p.plan}</td>
//                     <td>{p.amount}</td>
//                     <td>{p.date}</td>
//                     <td>
//                       <span
//                         className={`badge ${
//                           p.status === "Success" ? "bg-success" : "bg-danger"
//                         }`}
//                       >
//                         {p.status}
//                       </span>
//                     </td>
//                     <td>{p.transactionId}</td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         <div className="text-center mt-4">
//           <a href="/my-membership" className="btn btn-primary">
//             View Membership
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

import { useState } from "react";
import { FaPlus, FaTrash, FaCreditCard, FaCrown, FaUniversity, FaCheck } from "react-icons/fa";
import { Modal } from "react-bootstrap";

export default function PaymentHistoryPage() {
  const [showModal, setShowModal] = useState(false);

  // Dummy Data (Replace with API later)
  const payments = [
    {
      date: "Dec 06, 2025",
      time: "04:42 AM",
      type: "membership",
      title: "Basic Plan",
      duration: "7 days",
      amount: "₹5,000.00",
      method: "Bank Transfer",
      status: "Approved",
      txn: "TXN_6933B44FC5E29"
    },
    {
      date: "Nov 29, 2025",
      time: "06:50 PM",
      type: "membership",
      title: "Admin for Custom Plan",
      duration: "30 days",
      amount: "₹10.00",
      method: "QR Code",
      status: "Approved",
      txn: "TXN_692B408A288B2"
    }
  ];

  return (
    <>
      <Header />

      <div className="container my-4">

        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12">

              {/* HEADER */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h1 className="display-6 fw-bold text-primary">
                    <FaCreditCard className="me-3" />
                    Payment History
                  </h1>
                  <p className="text-muted mb-0">Track all your payments and transactions</p>
                </div>

                <div>
                  <a href="/memberships" className="btn btn-outline-primary me-2">
                    <FaPlus className="me-2" /> New Purchase
                  </a>

                  <button className="btn btn-outline-warning" onClick={() => setShowModal(true)}>
                    <FaTrash className="me-2" /> Clear History
                  </button>
                </div>
              </div>

              {/* STATS CARDS */}
              <div className="row mb-4">
                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center">
                      <div className="display-6 fw-bold text-primary">{payments.length}</div>
                      <small className="text-muted">Total Payments</small>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center">
                      <div className="display-6 fw-bold text-warning">0</div>
                      <small className="text-muted">Pending</small>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center">
                      <div className="display-6 fw-bold text-success">{payments.length}</div>
                      <small className="text-muted">Approved</small>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 mb-3">
                  <div className="card border-0 shadow-sm h-100">
                    <div className="card-body text-center">
                      <div className="display-6 fw-bold text-info">₹106,710.00</div>
                      <small className="text-muted">Total Spent</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* FILTERS */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <form className="row g-3">
                    <div className="col-md-4">
                      <select className="form-select">
                        <option>All Status</option>
                        <option>Pending</option>
                        <option>Approved</option>
                        <option>Rejected</option>
                        <option>Failed</option>
                      </select>
                    </div>

                    <div className="col-md-4">
                      <select className="form-select">
                        <option>All Types</option>
                        <option>Membership</option>
                        <option>Top Ad</option>
                      </select>
                    </div>

                    <div className="col-md-4">
                      <button type="submit" className="btn btn-primary me-2">
                        Filter
                      </button>

                      <a href="/payment-history" className="btn btn-outline-secondary">
                        Clear
                      </a>
                    </div>
                  </form>
                </div>
              </div>

              {/* PAYMENT LIST */}
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Payment Transactions</h5>
                </div>

                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead className="table-light">
                        <tr>
                          <th>Date</th>
                          <th>Type</th>
                          <th>Description</th>
                          <th>Amount</th>
                          <th>Method</th>
                          <th>Status</th>
                          <th>Transaction ID</th>
                        </tr>
                      </thead>

                      <tbody>
                        {payments.map((p, i) => (
                          <tr key={i}>
                            <td>
                              <div className="fw-bold">{p.date}</div>
                              <small className="text-muted">{p.time}</small>
                            </td>

                            <td>
                              <span className="badge bg-primary">
                                <FaCrown className="me-1" /> Membership
                              </span>
                            </td>

                            <td>
                              <div className="fw-bold">{p.title}</div>
                              <small className="text-muted">{p.duration}</small>
                            </td>

                            <td>
                              <div className="fw-bold text-success">{p.amount}</div>
                              <small className="text-muted">USD</small>
                            </td>

                            <td>
                              {p.method}
                            </td>

                            <td>
                              <span className="badge bg-success">
                                <FaCheck className="me-1" /> {p.status}
                              </span>
                            </td>

                            <td>
                              <code className="small">{p.txn}</code>
                            </td>
                          </tr>
                        ))}
                      </tbody>

                    </table>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <div className="modal-header">
          <h5 className="modal-title">Clear Payment History</h5>
          <button className="btn-close" onClick={() => setShowModal(false)} />
        </div>

        <div className="modal-body">
          <div className="alert alert-danger">
            <i className="fas fa-exclamation-triangle me-2"></i>
            <strong>Warning:</strong> This will permanently delete ALL your payment records.
          </div>
          <p>Are you sure?</p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
            Cancel
          </button>

          <button className="btn btn-warning">
            <FaTrash className="me-1" /> Clear History
          </button>
        </div>
      </Modal>

      <Footer />
    </>
  );
}
