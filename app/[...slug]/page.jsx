// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";

// // Breadcrumb component
// function Breadcrumb({ city, category, subcategory, listingsCount }) {
//   const format = (text) => text?.replace(/-/g, " ");

//   return (
//     <nav aria-label="breadcrumb" className="bg-light border-bottom py-2">
//       <div className="container">
//         <ol className="breadcrumb mb-0">
//           <li className="breadcrumb-item">
//             <Link href="/">Home</Link>
//           </li>

//           {city && (
//             <li className="breadcrumb-item">
//               <Link href={`/listing/${city}`}>{format(city)}</Link>
//             </li>
//           )}

//           {category && (
//             <li className="breadcrumb-item">
//               <Link href={`/listing/${city}/${category}`}>
//                 {format(category)} in {format(city)}
//               </Link>
//             </li>
//           )}

//           {subcategory && (
//             <li className="breadcrumb-item">
//               <Link href={`/listing/${city}/${category}-${subcategory}`}>
//                 {format(category)} for {format(subcategory)} in {format(city)}
//               </Link>
//             </li>
//           )}

//           {listingsCount && (
//             <li className="breadcrumb-item active" aria-current="page">
//               {listingsCount}+ Listings
//             </li>
//           )}
//         </ol>
//       </div>
//     </nav>
//   );
// }

// // Main Page
// export default function ListingPage({ params }) {
//   const { slug } = params; // slug is an array

//   // Decode slug into city, category, subcategory
//   let city = null;
//   let category = null;
//   let subcategory = null;

//   if (slug && slug.length > 0) {
//     city = slug[0];
//     if (slug.length === 2) category = slug[1];
//     if (slug.length === 3) {
//       category = slug[1];
//       subcategory = slug[2];
//     }
//   }

//   // STATIC sample listings for now
//   const listings = [
//     {
//       id: 1,
//       name: "Siddhart AC Repairing and Service",
//       category: category || "AC Repair & Services",
//       area: subcategory || "Goregaon East",
//       phone: "09008511066",
//       rating: 4.5,
//       reviews: 10,
//     },
//     {
//       id: 2,
//       name: "Raj Electricals",
//       category: category || "Electricians",
//       area: subcategory || "Bandra West",
//       phone: "09001234567",
//       rating: 4.2,
//       reviews: 8,
//     },
//     {
//       id: 3,
//       name: "Sharma Plumbing Services",
//       category: category || "Plumbers",
//       area: subcategory || "Andheri East",
//       phone: "09007654321",
//       rating: 4.0,
//       reviews: 12,
//     },
//   ];

//   return (
//     <>
//       <Header />

//       {/* Breadcrumb */}
//       <Breadcrumb
//         city={city}
//         category={category}
//         subcategory={subcategory}
//         listingsCount={listings.length}
//       />

//       {/* Page Header */}
//       <div className="container py-4">
//         <h2 className="text-capitalize">
//           {category
//             ? `${category} in ${city}${subcategory ? ` - ${subcategory}` : ""}`
//             : `Listings in ${city}`}
//         </h2>
//         <p className="text-muted">{listings.length}+ verified listings</p>

//         {/* Listings */}
//         <div className="row g-4 mt-3">
//           {listings.map((item) => (
//             <div key={item.id} className="col-md-4">
//               <div className="card shadow-sm p-3 h-100">
//                 <h5 className="fw-bold text-capitalize">{item.name}</h5>
//                 <p className="mb-1">
//                   Category: {item.category}
//                   <br />
//                   Area: {item.area}
//                 </p>
//                 <p className="mb-1">📞 {item.phone}</p>
//                 <p className="mb-1">⭐ {item.rating} ({item.reviews} Reviews)</p>
//                 <button className="btn btn-primary w-100">View Details</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ListingClient({ slug }) {
  // Make sure slug is always an array
  const safeSlug = Array.isArray(slug) ? slug : [];

  console.log("slug is ======>", safeSlug);

  let city = safeSlug[0] || null;
  let category = safeSlug[1] || null;
  let subcategory = safeSlug[2] || null;

  const formattedCity = city?.replace(/-/g, " ");
  const formattedCategory = category?.replace(/-/g, " ");
  const formattedSubcategory = subcategory?.replace(/-/g, " ");

  const listings = [
    { id: 1, name: "Siddhart AC Repairing", area: formattedSubcategory || "Goregaon East" },
    { id: 2, name: "Raj Electricals", area: formattedSubcategory || "Bandra West" },
  ];

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="bg-light border-bottom py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            {city && (
              <li className="breadcrumb-item">
                <Link href={`/${city}`} className="text-decoration-none text-dark">
                  {formattedCity}
                </Link>
              </li>
            )}

            {category && (
              <li className="breadcrumb-item">
                <Link href={`/${city}/${category}`} className="text-decoration-none text-dark">
                  {formattedCategory} in {formattedCity}
                </Link>
              </li>
            )}

            {subcategory && (
              <li className="breadcrumb-item">
                <Link
                  href={`/${city}/${category}-${subcategory}`}
                  className="text-decoration-none text-dark"
                >
                  {formattedCategory} for {formattedSubcategory} in {formattedCity}
                </Link>
              </li>
            )}

            <li className="breadcrumb-item active" aria-current="page">
              {listings.length}+ Listings
            </li>
          </ol>
        </div>
      </nav>

      {/* Listings */}
      <div className="container py-4">
        <h2>
          {formattedCategory
            ? `${formattedCategory} in ${formattedCity}${formattedSubcategory ? ` - ${formattedSubcategory}` : ""}`
            : city
            ? `Listings in ${formattedCity}`
            : "All Listings"}
        </h2>

        <div className="row g-4 mt-3">
          {listings.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card shadow-sm p-3 h-100">
                <h5 className="fw-bold">{item.name}</h5>
                <p>Area: {item.area}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
