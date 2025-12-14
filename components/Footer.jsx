export default function Footer() {
  return (
    <footer className="footer-main bg-dark text-white py-5">
      <div className="container">
        <div className="row g-5">

          {/* Brand Section */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <div className="brand-logo mb-4">
                <img
                  src="https://digitalindialearning.com/img/logo.png"
                  alt="FindServices"
                  width={70}
                  className="footer-logo"
                />
              </div>

              <p className="brand-description">
                A reliable platform where people can share and discover local
                services, community support, skill exchange, and meaningful
                connections for collaboration. Built to help users find real,
                trustworthy service providers and genuine community listings.
              </p>

              <div className="social-media mt-4">
                <h6 className="social-title">Follow Us</h6>
                <div className="social-links d-flex gap-3">
                  <a href="#" className="text-white" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-white" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-white" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-white" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <div className="footer-section">
              <h5 className="section-title">Quick Links</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="/" className="text-white">
                    <i className="fas fa-home me-2"></i>Home
                  </a>
                </li>
                <li>
                  <a href="/post-ad" className="text-white">
                    <i className="fas fa-plus me-2"></i>Post Free Ad
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-white">
                    <i className="fas fa-search me-2"></i>Browse Services
                  </a>
                </li>
                <li>
                  <a href="/profile" className="text-white">
                    <i className="fas fa-user me-2"></i>My Account
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Genuine Categories */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h5 className="section-title">Popular Categories</h5>
              <ul className="footer-links list-unstyled">
                <li>
                  <a href="/category/home-services" className="text-white">
                    <i className="fas fa-tag me-2"></i>Home Services
                  </a>
                </li>
                <li>
                  <a href="/category/repair-maintenance" className="text-white">
                    <i className="fas fa-tag me-2"></i>Repair & Maintenance
                  </a>
                </li>
                <li>
                  <a href="/category/beauty-care" className="text-white">
                    <i className="fas fa-tag me-2"></i>Beauty & Personal Care
                  </a>
                </li>
                <li>
                  <a href="/category/lessons-training" className="text-white">
                    <i className="fas fa-tag me-2"></i>Lessons & Training
                  </a>
                </li>
                <li>
                  <a href="/category/community-support" className="text-white">
                    <i className="fas fa-tag me-2"></i>Community Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-section">
              <h5 className="section-title">Contact & Support</h5>

              <div className="contact-info">
                <div className="contact-item d-flex align-items-center mb-3">
                  <i className="fas fa-envelope me-3"></i>
                  <div>
                    <span className="contact-label d-block">Email</span>
                    <a href="mailto:info@scooro.com" className="text-white">
                      info@scooro.com
                    </a>
                  </div>
                </div>

                <div className="contact-item d-flex align-items-center">
                  <i className="fas fa-headset me-3"></i>
                  <div>
                    <span className="contact-label d-block">Support</span>
                    <a href="/support" className="text-white">
                      Help Center
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}


// export default function Footer() {
//   return (
//     <footer
//       style={{
//         backgroundColor: '#1E293B',
//         color: '#F1F5F9',
//         borderTop: '1px solid #f6f6f6',
//         borderBottom: '1px solid #f6f6f6',
//       }}
//       className="py-5"
//     >
//       <div className="container">
//         <div className="row g-5">

//           {/* Brand Section */}
//           <div className="col-lg-4 col-md-6">
//             <div className="d-flex align-items-center mb-3">
//               <img
//                 src="https://digitalindialearning.com/img/logo.png"
//                 alt="FindServices"
//                 width={70}
//                 className="me-2"
//               />
//               <span className="fw-bold fs-5">FindServices</span>
//             </div>
//             <p className="small">
//               Discover local services, connect with communities, and find
//               trustworthy providers. Built for real, reliable connections.
//             </p>
//             <div className="d-flex gap-3 mt-3">
//               <a href="#" className="text-white hover-link"><i className="fab fa-facebook-f"></i></a>
//               <a href="#" className="text-white hover-link"><i className="fab fa-twitter"></i></a>
//               <a href="#" className="text-white hover-link"><i className="fab fa-instagram"></i></a>
//               <a href="#" className="text-white hover-link"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="col-lg-2 col-md-6">
//             <h6 className="mb-3">Quick Links</h6>
//             <ul className="list-unstyled">
//               <li className="mb-2"><a href="/" className="text-white hover-link">Home</a></li>
//               <li className="mb-2"><a href="/post-ad" className="text-white hover-link">Post Free Ad</a></li>
//               <li className="mb-2"><a href="/services" className="text-white hover-link">Browse Services</a></li>
//               <li><a href="/profile" className="text-white hover-link">My Account</a></li>
//             </ul>
//           </div>

//           {/* Popular Categories */}
//           <div className="col-lg-3 col-md-6">
//             <h6 className="mb-3">Popular Categories</h6>
//             <ul className="list-unstyled">
//               <li className="mb-2"><a href="/category/home-services" className="text-white hover-link">Home Services</a></li>
//               <li className="mb-2"><a href="/category/repair-maintenance" className="text-white hover-link">Repair & Maintenance</a></li>
//               <li className="mb-2"><a href="/category/beauty-care" className="text-white hover-link">Beauty & Personal Care</a></li>
//               <li className="mb-2"><a href="/category/lessons-training" className="text-white hover-link">Lessons & Training</a></li>
//               <li><a href="/category/community-support" className="text-white hover-link">Community Support</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="col-lg-3 col-md-6">
//             <h6 className="mb-3">Contact & Support</h6>
//             <div className="small">
//               <div className="d-flex align-items-start mb-2">
//                 <i className="fas fa-envelope me-2 mt-1"></i>
//                 <div>Email: <a href="mailto:info@scooro.com" className="text-white hover-link">info@scooro.com</a></div>
//               </div>
//               <div className="d-flex align-items-start">
//                 <i className="fas fa-headset me-2 mt-1"></i>
//                 <div>Support: <a href="/support" className="text-white hover-link">Help Center</a></div>
//               </div>
//             </div>
//           </div>

//         </div>

//         <div className="text-center mt-4 pt-3 small border-top border-gray-500">
//           &copy; {new Date().getFullYear()} FindServices. All rights reserved.
//         </div>
//       </div>

//       {/* Hover Effect Styles */}
//       <style>{`
//         .hover-link {
//           position: relative;
//           transition: color 0.3s ease;
//         }

//         .hover-link:hover {
//           color: #0d6efd !important;
//         }
//       `}</style>
//     </footer>
//   );
// }
