

// "use client";

// import { useSelector } from "react-redux";
// import Header from "../../../components/Header";
// import Footer from "../../../components/Footer";
// import Link from "next/link";

// const mockAds = [
//   {
//     id: 2048,
//     title: "Luxury Coffee Shop in Downtown Trichy",
//     slug: "luxury-coffee-shop-downtown-trichy",
//     thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
//     category: "Food & Beverage",
//     city: "Trichy",
//     status: "Approved",
//     isPremium: true,
//     views: 245,
//     description: "A modern coffee shop offering a variety of artisanal coffees, fresh pastries, and a cozy ambiance in downtown Trichy."
//   },
//   {
//     id: 2049,
//     title: "Luxury 3BHK Apartment for Sale – Downtown Manhattan",
//     slug: "luxury-3bhk-apartment-manhattan",
//     thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8luxury-apartment%7Ccondo%7Cinterior%7Creal-estate%7Cbuilding%7Cmodern%7Chome%7Chouse%7Cflat%7Cdesign%7Cstyle%7Carchitecture&ixlib=rb-4.0.3&q=80&w=400",
//     category: "Real Estate",
//     city: "New York",
//     status: "Pending",
//     isPremium: false,
//     views: 134,
//     description: "Spacious 3BHK apartment in downtown Manhattan with modern amenities, balcony, and prime location near public transport."
//   },
//   {
//     id: 2050,
//     title: "Professional Wedding & Event Photography",
//     slug: "professional-wedding-event-photography",
//     thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
//     category: "Services",
//     city: "Los Angeles",
//     status: "Approved",
//     isPremium: true,
//     views: 87,
//     description: "Offering professional photography services for weddings, corporate events, and portraits with high-quality packages available."
//   },
//   {
//     id: 2051,
//     title: "Handmade Pottery Classes for Beginners",
//     slug: "handmade-pottery-classes",
//     thumbnail: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
//     category: "Education & Hobbies",
//     city: "Chicago",
//     status: "Approved",
//     isPremium: false,
//     views: 56,
//     description: "Join our pottery classes and learn to create beautiful handmade pottery pieces. Perfect for beginners and hobbyists."
//   },
//   {
//     id: 2052,
//     title: "Fitness & Yoga Studio – Downtown LA",
//     slug: "fitness-yoga-studio-la",
//     thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8luxury-apartment%7Ccondo%7Cinterior%7Creal-estate%7Cbuilding%7Cmodern%7Chome%7Chouse%7Cflat%7Cdesign%7Cstyle%7Carchitecture&ixlib=rb-4.0.3&q=80&w=400",
//     category: "Health & Wellness",
//     city: "Los Angeles",
//     status: "Approved",
//     isPremium: true,
//     views: 92,
//     description: "A modern fitness and yoga studio offering group classes, personal training, and wellness workshops for all levels."
//   }
// ];


// export default function ProfilePage() {
//   const { user, isAuthenticated } = useSelector((state) => state.auth);

//   const profile = {
//     name: user?.name || "User",
//     email: user?.email || "Not Provided",
//     mobile: user?.mobile || "Not Provided",
//     location: user?.location || "Not Provided",
//     joined: user?.createdAt?.slice(0, 10) || "2025-01-01",
//   };

//   const stats = {
//     totalAds: 1334,
//     activeAds: 1334,
//     pendingAds: 0,
//     adsLeft: 100,
//     topAdsLeft: 100,
//   };

//   return (
//     <>
//       <Header />
//       <div className="container py-4">

//         {!isAuthenticated ? (
//           <div className="alert alert-warning text-center my-5 shadow-sm">
//             You are not logged in. Please{" "}
//             <Link href="/login" className="fw-bold text-decoration-underline">
//               login
//             </Link>{" "}
//             to view your profile.
//           </div>
//         ) : (
//           <>
//             {/* Profile Header */}
//             <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
//               <div className="row align-items-center g-3">

//                 {/* Avatar + Name */}
//                 <div className="col-md-3 text-center">
//                   <div className="rounded-circle bg-primary bg-gradient text-white d-flex align-items-center justify-content-center mx-auto shadow"
//                     style={{ width: 120, height: 120 }}>
//                     <i className="fas fa-user fa-3x"></i>
//                   </div>
//                   <h4 className="fw-bold mt-3 mb-1">{profile.name}</h4>
//                   <p className="text-muted small mb-0">
//                     <i className="fas fa-calendar-alt me-1"></i> Member since {profile.joined}
//                   </p>
//                 </div>

//                 {/* Stats Section */}
//                 <div className="col-md-9">
//                   <div className="row g-3">
//                     {[
//                       { value: stats.totalAds, label: "Total Ads", icon: "fa-bullhorn", color: "primary" },
//                       { value: stats.activeAds, label: "Active Ads", icon: "fa-check-circle", color: "success" },
//                       { value: stats.pendingAds, label: "Pending", icon: "fa-clock", color: "warning" },
//                       { value: stats.adsLeft, label: "Ads Left", icon: "fa-layer-group", color: "info" },
//                       { value: stats.topAdsLeft, label: "Top Ads Left", icon: "fa-star", color: "warning" },
//                     ].map((item, idx) => (
//                       <div className="col-md-4 col-sm-6" key={idx}>
//                         <div className={`p-3 rounded-3 bg-${item.color} bg-opacity-10 text-center shadow-sm h-100 d-flex flex-column justify-content-center`}>
//                           <div className={`text-${item.color} mb-2`}>
//                             <i className={`fas ${item.icon} fa-2x`}></i>
//                           </div>
//                           <h4 className={`fw-bold text-${item.color}`}>{item.value}</h4>
//                           <p className="small mb-0 text-muted">{item.label}</p>
//                         </div>
//                       </div>
//                     ))}

//                     <div className="col-12 mt-3">
//                       <div className="p-4 bg-warning bg-opacity-10 rounded-3 d-flex justify-content-between align-items-center shadow-sm flex-wrap">
//                         <div>
//                           <h6 className="fw-bold mb-1">सभी Ads को Top बनाएं</h6>
//                           <p className="small text-muted mb-0">एक क्लिक में सभी ads को top पर promote करें</p>
//                         </div>
//                         <button className="btn btn-warning fw-bold shadow-sm mt-2 mt-md-0">
//                           <i className="fas fa-star me-2"></i>Make All Top
//                         </button>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Dashboard Nav */}
//             <div className="bg-white rounded-4 shadow-sm p-3 mb-4">
//               <div className="row g-3 text-center">
//                 {[
//                   { name: "Dashboard", icon: "fa-tachometer-alt", link: "/profile" },
//                   { name: "Post New Ad", icon: "fa-plus", link: "/post-ad" },
//                   { name: "Edit Profile", icon: "fa-user-edit", link: "/edit-profile" },
//                   { name: "Change Password", icon: "fa-lock", link: "/change-password" },
//                 ].map((item, i) => (
//                   <div className="col-md-3 col-6" key={i}>
//                     <Link href={item.link}>
//                       <div className="p-3 rounded-3 bg-light shadow-sm hover-shadow-small d-flex align-items-center justify-content-center gap-2">
//                         <i className={`fas ${item.icon}`}></i>
//                         <span>{item.name}</span>
//                       </div>
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Profile & Ads */}
//             <div className="row g-4">
//               {/* Profile Info */}
//               <div className="col-lg-4">
//                 <div className="card border-0 shadow-sm rounded-4 h-100">
//                   <div className="card-header bg-transparent border-0 pb-0">
//                     <h5 className="fw-bold mb-0"><i className="fas fa-user-circle text-primary me-2"></i>Profile Information</h5>
//                   </div>
//                   <div className="card-body pt-3">
//                     {[
//                       { label: "Full Name", value: "Hot Nidhi", icon: "fa-user", color: "primary" },
//                       { label: "Email Address", value: "escorts-01@1datings.com", icon: "fa-envelope", color: "info" },
//                       { label: "Phone Number", value: "+919000000000", icon: "fa-phone", color: "success" },
//                       { label: "Member Since", value: "Aug 25, 2025", icon: "fa-calendar-alt", color: "warning" },
//                     ].map((item, idx) => (
//                       <div className="d-flex align-items-center mb-3" key={idx}>
//                         <div className={`info-icon bg-${item.color} bg-opacity-10 rounded-circle p-2 me-3`}>
//                           <i className={`fas ${item.icon} text-${item.color}`}></i>
//                         </div>
//                         <div>
//                           <small className="text-muted d-block">{item.label}</small>
//                           <strong>{item.value}</strong>
//                         </div>
//                       </div>
//                     ))}
//                     <div className="d-grid gap-2 mt-4">
//                       <button className="btn btn-outline-primary"><i className="fas fa-edit me-2"></i>Edit Profile</button>
//                       <button className="btn btn-outline-secondary"><i className="fas fa-key me-2"></i>Change Password</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Ads List */}
//               <div className="col-lg-8">
//                 <div className="card border-0 shadow-sm rounded-4 h-100">
//                   <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center flex-wrap">
//                     <h5 className="fw-bold mb-0"><i className="fas fa-bullhorn text-primary me-2"></i>My Advertisements</h5>
//                     <div className="d-flex align-items-center mt-2 mt-md-0 gap-2">
//                       <button className="btn btn-link text-decoration-none text-muted"><i className="fas fa-check-square me-1"></i>Bulk Actions</button>
//                       <Link href="/post-ad" className="btn btn-primary"><i className="fas fa-plus me-2"></i>Post New Ad</Link>
//                     </div>
//                   </div>

          
//                   <div className="card-body px-0">
//                     {mockAds.map((ad) => (
//                       <div className="row align-items-center mb-3 py-3 px-3 border-bottom" key={ad.id}>

//                         {/* Checkbox */}
//                         <div className="col-md-1 text-center">
//                           <div className="form-check">
//                             <input type="checkbox" className="form-check-input ad-checkbox" id={`ad-${ad.id}`} />
//                             <label className="form-check-label" htmlFor={`ad-${ad.id}`}></label>
//                           </div>
//                         </div>

//                         {/* Thumbnail */}
//                         <div className="col-md-2 text-center">
//                           <img
//                             src={ad.thumbnail}
//                             className="img-fluid rounded"
//                             style={{ width: "80px", height: "80px", objectFit: "cover" }}
//                             alt={ad.title}
//                           />
//                         </div>

//                         {/* Title + Meta + Description */}
//                         <div className="col-md-6">
//                           <h6 className="fw-bold mb-1">
//                             <Link href={`/listing/${ad.slug}`} className="text-decoration-none text-dark">
//                               {ad.title}
//                             </Link>
//                           </h6>
//                           <div className="ad-meta text-muted small mb-2">
//                             <span className="me-3">
//                               <i className="fas fa-tag me-1"></i>{ad.category}
//                             </span>
//                             <span className="me-3">
//                               <i className="fas fa-map-marker-alt me-1"></i>{ad.city}
//                             </span>
//                           </div>
//                           <p className="text-muted mb-0 small">{ad.description}</p>
//                         </div>

//                         {/* Status + Views */}
//                         <div className="col-md-2 text-center">
//                           <div className="d-flex flex-column align-items-center gap-1 mb-2">
//                             <span className={`badge ${ad.status === "Approved" ? "bg-success" : "bg-warning text-dark"}`}>
//                               {ad.status}
//                             </span>
//                             {ad.isPremium && (
//                               <span className="badge bg-warning text-dark">
//                                 <i className="fas fa-crown me-1"></i>PREMIUM
//                               </span>
//                             )}
//                           </div>
//                           <div className="ad-stats small text-muted">
//                             <div><i className="fas fa-eye me-1"></i>{ad.views} views</div>
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="col-md-1 text-end">
//                           <div className="d-flex flex-column gap-1">
//                             <Link href={`/listing/${ad.slug}`} className="btn btn-outline-primary btn-sm">
//                               <i className="fas fa-eye me-1"></i>View
//                             </Link>
//                             <Link href={`/my-ads/${ad.id}/edit`} className="btn btn-outline-secondary btn-sm">
//                               <i className="fas fa-edit me-1"></i>Edit
//                             </Link>
//                             {ad.isPremium ? (
//                               <span className="btn btn-success btn-sm disabled">
//                                 <i className="fas fa-crown me-1"></i>Top Ad Active
//                               </span>
//                             ) : (
//                               <button className="btn btn-warning btn-sm">
//                                 <i className="fas fa-star me-1"></i>Make Top
//                               </button>
//                             )}
//                             <button className="btn btn-outline-danger btn-sm">
//                               <i className="fas fa-trash me-1"></i>Delete
//                             </button>
//                           </div>
//                         </div>

//                       </div>
//                     ))}
//                   </div>

//                 </div>
//               </div>

//             </div>
//           </>
//         )}
//       </div>
//       <Footer />
//     </>
//   );
// }

"use client";

import { useSelector } from "react-redux";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

const mockAds = [
  {
    id: 2048,
    title: "Luxury Coffee Shop in Downtown Trichy",
    slug: "luxury-coffee-shop-downtown-trichy",
    thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    category: "Food & Beverage",
    city: "Trichy",
    status: "Approved",
    isPremium: true,
    views: 245,
    description:
      "A modern coffee shop offering a variety of artisanal coffees, fresh pastries, and a cozy ambiance in downtown Trichy.",
  },
  {
    id: 2049,
    title: "Luxury 3BHK Apartment for Sale – Downtown Manhattan",
    slug: "luxury-3bhk-apartment-manhattan",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8luxury-apartment%7Ccondo%7Cinterior%7Creal-estate%7Cbuilding%7Cmodern%7Chome%7Chouse%7Cflat%7Cdesign%7Cstyle%7Carchitecture&ixlib=rb-4.0.3&q=80&w=400",
    category: "Real Estate",
    city: "New York",
    status: "Pending",
    isPremium: false,
    views: 134,
    description:
      "Spacious 3BHK apartment in downtown Manhattan with modern amenities, balcony, and prime location near public transport.",
  },
  {
    id: 2050,
    title: "Professional Wedding & Event Photography",
    slug: "professional-wedding-event-photography",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Services",
    city: "Los Angeles",
    status: "Approved",
    isPremium: true,
    views: 87,
    description:
      "Offering professional photography services for weddings, corporate events, and portraits with high-quality packages available.",
  },
  {
    id: 2051,
    title: "Handmade Pottery Classes for Beginners",
    slug: "handmade-pottery-classes",
    thumbnail: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    category: "Education & Hobbies",
    city: "Chicago",
    status: "Approved",
    isPremium: false,
    views: 56,
    description:
      "Join our pottery classes and learn to create beautiful handmade pottery pieces. Perfect for beginners and hobbyists.",
  },
  {
    id: 2052,
    title: "Fitness & Yoga Studio – Downtown LA",
    slug: "fitness-yoga-studio-la",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8luxury-apartment%7Ccondo%7Cinterior%7Creal-estate%7Cbuilding%7Cmodern%7Chome%7Chouse%7Cflat%7Cdesign%7Cstyle%7Carchitecture&ixlib=rb-4.0.3&q=80&w=400",
    category: "Health & Wellness",
    city: "Los Angeles",
    status: "Approved",
    isPremium: true,
    views: 92,
    description:
      "A modern fitness and yoga studio offering group classes, personal training, and wellness workshops for all levels.",
  },
];

export default function ProfilePage() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const profile = {
    name: user?.name || "User",
    email: user?.email || "Not Provided",
    mobile: user?.mobile || "Not Provided",
    location: user?.location || "Not Provided",
    joined: user?.createdAt?.slice(0, 10) || "2025-01-01",
  };

  const stats = {
    totalAds: 1334,
    activeAds: 1334,
    pendingAds: 0,
    adsLeft: 100,
    topAdsLeft: 100,
  };

  return (
    <>
      <Header />
      <div className="container py-5">

        {!isAuthenticated ? (
          <div className="alert alert-warning text-center shadow-sm my-5">
            You are not logged in. Please{" "}
            <Link href="/login" className="fw-bold text-decoration-underline">
              login
            </Link>{" "}
            to view your profile.
          </div>
        ) : (
          <>
            {/* Profile Header */}
            <div className="bg-white rounded-4 shadow-sm p-4 mb-5">
              <div className="row align-items-center g-4">

                {/* Avatar */}
                <div className="col-md-3 text-center">
                  <div
                    className="rounded-circle bg-primary bg-gradient text-white d-flex align-items-center justify-content-center mx-auto shadow"
                    style={{ width: 120, height: 120 }}
                  >
                    <i className="fas fa-user fa-3x"></i>
                  </div>
                  <h4 className="fw-bold mt-3 mb-1">{profile.name}</h4>
                  <p className="text-muted small mb-0">
                    <i className="fas fa-calendar-alt me-1"></i> Member since {profile.joined}
                  </p>
                </div>

                {/* Stats */}
                <div className="col-md-9">
                  <div className="row g-3">
                    {[
                      { value: stats.totalAds, label: "Total Ads", icon: "fa-bullhorn", color: "primary" },
                      { value: stats.activeAds, label: "Active Ads", icon: "fa-check-circle", color: "success" },
                      { value: stats.pendingAds, label: "Pending", icon: "fa-clock", color: "warning" },
                      { value: stats.adsLeft, label: "Ads Left", icon: "fa-layer-group", color: "info" },
                      { value: stats.topAdsLeft, label: "Top Ads Left", icon: "fa-star", color: "warning" },
                    ].map((item, idx) => (
                      <div className="col-md-4 col-sm-6" key={idx}>
                        <div
                          className={`p-3 rounded-3 bg-${item.color} bg-opacity-10 text-center shadow-sm h-100 d-flex flex-column justify-content-center hover-shadow-small`}
                        >
                          <div className={`text-${item.color} mb-2`}>
                            <i className={`fas ${item.icon} fa-2x`}></i>
                          </div>
                          <h4 className={`fw-bold text-${item.color}`}>{item.value}</h4>
                          <p className="small mb-0 text-muted">{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Promote All Ads */}
                  <div className="mt-4 p-4 bg-warning bg-opacity-10 rounded-3 shadow-sm d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                      <h6 className="fw-bold mb-1">सभी Ads को Top बनाएं</h6>
                      <p className="small text-muted mb-0">एक क्लिक में सभी ads को top पर promote करें</p>
                    </div>
                    <button className="btn btn-warning fw-bold shadow-sm mt-2 mt-md-0">
                      <i className="fas fa-star me-2"></i>Make All Top
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Nav */}
            <div className="bg-white rounded-4 shadow-sm p-3 mb-5">
              <div className="row g-3 text-center">
                {[
                  { name: "Dashboard", icon: "fa-tachometer-alt", link: "/profile" },
                  { name: "Post New Ad", icon: "fa-plus", link: "/post-ad" },
                  { name: "Edit Profile", icon: "fa-user-edit", link: "/edit-profile" },
                  { name: "Change Password", icon: "fa-lock", link: "/change-password" },
                ].map((item, i) => (
                  <div className="col-md-3 col-6" key={i}>
                    <Link href={item.link}>
                      <div className="p-3 rounded-3 bg-light shadow-sm hover-shadow-small d-flex align-items-center justify-content-center gap-2">
                        <i className={`fas ${item.icon}`}></i>
                        <span>{item.name}</span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="row g-4">

              {/* Profile Info */}
              <div className="col-lg-4">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-header bg-transparent border-0 pb-0">
                    <h5 className="fw-bold mb-0">
                      <i className="fas fa-user-circle text-primary me-2"></i>Profile Information
                    </h5>
                  </div>
                  <div className="card-body pt-3">
                    {[
                      { label: "Full Name", value: profile.name, icon: "fa-user", color: "primary" },
                      { label: "Email Address", value: profile.email, icon: "fa-envelope", color: "info" },
                      { label: "Phone Number", value: profile.mobile, icon: "fa-phone", color: "success" },
                      { label: "Location", value: profile.location, icon: "fa-map-marker-alt", color: "warning" },
                    ].map((item, idx) => (
                      <div className="d-flex align-items-center mb-3" key={idx}>
                        <div className={`info-icon bg-${item.color} bg-opacity-10 rounded-circle p-2 me-3`}>
                          <i className={`fas ${item.icon} text-${item.color}`}></i>
                        </div>
                        <div>
                          <small className="text-muted d-block">{item.label}</small>
                          <strong>{item.value}</strong>
                        </div>
                      </div>
                    ))}

                    <div className="d-grid gap-2 mt-4">
                      <Link href="/edit-profile" className="btn btn-outline-primary">
                        <i className="fas fa-edit me-2"></i>Edit Profile
                      </Link>
                      <Link href="/change-password" className="btn btn-outline-secondary">
                        <i className="fas fa-key me-2"></i>Change Password
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ads List */}
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-header bg-transparent border-0 d-flex justify-content-between align-items-center flex-wrap">
                    <h5 className="fw-bold mb-0">
                      <i className="fas fa-bullhorn text-primary me-2"></i>My Advertisements
                    </h5>
                    <div className="d-flex align-items-center mt-2 mt-md-0 gap-2">
                      <button className="btn btn-link text-decoration-none text-muted">
                        <i className="fas fa-check-square me-1"></i>Bulk Actions
                      </button>
                      <Link href="/post-ad" className="btn btn-primary">
                        <i className="fas fa-plus me-2"></i>Post New Ad
                      </Link>
                    </div>
                  </div>

                  <div className="card-body px-0">
                    {mockAds.map((ad) => (
                      <div
                        className="row align-items-center mb-3 py-3 px-3 border-bottom hover-shadow-small rounded-3 mx-2"
                        key={ad.id}
                      >
                        {/* Checkbox */}
                        <div className="col-md-1 text-center">
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input ad-checkbox" id={`ad-${ad.id}`} />
                          </div>
                        </div>

                        {/* Thumbnail */}
                        <div className="col-md-2 text-center">
                          <img
                            src={ad.thumbnail}
                            className="img-fluid rounded"
                            style={{ width: "80px", height: "80px", objectFit: "cover" }}
                            alt={ad.title}
                          />
                        </div>

                        {/* Title + Meta + Description */}
                        <div className="col-md-6">
                          <h6 className="fw-bold mb-1">
                            <Link href={`/listing/${ad.slug}`} className="text-decoration-none text-dark">
                              {ad.title}
                            </Link>
                          </h6>
                          <div className="ad-meta text-muted small mb-2">
                            <span className="me-3">
                              <i className="fas fa-tag me-1"></i>{ad.category}
                            </span>
                            <span>
                              <i className="fas fa-map-marker-alt me-1"></i>{ad.city}
                            </span>
                          </div>
                          <p className="text-muted mb-0 small">{ad.description}</p>
                        </div>

                        {/* Status + Views */}
                        <div className="col-md-2 text-center">
                          <div className="d-flex flex-column align-items-center gap-1 mb-2">
                            <span className={`badge ${ad.status === "Approved" ? "bg-success" : "bg-warning text-dark"}`}>
                              {ad.status}
                            </span>
                            {ad.isPremium && (
                              <span className="badge bg-warning text-dark">
                                <i className="fas fa-crown me-1"></i>PREMIUM
                              </span>
                            )}
                          </div>
                          <div className="ad-stats small text-muted">
                            <div><i className="fas fa-eye me-1"></i>{ad.views} views</div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="col-md-1 text-end d-flex flex-column gap-1">
                          <Link href={`/listing/${ad.slug}`} className="btn btn-outline-primary btn-sm">
                            <i className="fas fa-eye me-1"></i>View
                          </Link>
                          <Link href={`/my-ads/${ad.id}/edit`} className="btn btn-outline-secondary btn-sm">
                            <i className="fas fa-edit me-1"></i>Edit
                          </Link>
                          {ad.isPremium ? (
                            <span className="btn btn-success btn-sm disabled">
                              <i className="fas fa-crown me-1"></i>Top Ad Active
                            </span>
                          ) : (
                            <button className="btn btn-warning btn-sm">
                              <i className="fas fa-star me-1"></i>Make Top
                            </button>
                          )}
                          <button className="btn btn-outline-danger btn-sm">
                            <i className="fas fa-trash me-1"></i>Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
