



// "use client";

// import type React from "react";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

// import {
//   Container,
//   Button,
//   InputGroup,
//   Form,
// } from "react-bootstrap";

// import { useSuggestions } from "./search/useSuggestions";

// import PopularCategories from "../components/PopularCategories";
// import TopServices from "../components/TopServices";
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import FeaturedListings from '../components/FeaturedListings';
// import TopCities from '../components/TopCities';
// import WhayChoose from '../components/WhyChooseUs'
// // import SearchBar from "../components/search/SearchBar";

// export default function Home(): React.JSX.Element {
//   const router = useRouter();

//   const [location, setLocation] = useState<string>("");
//   const [service, setService] = useState<string>("");

//   const [showLocationSuggestions, setShowLocationSuggestions] =
//     useState<boolean>(false);
//   const [showServiceSuggestions, setShowServiceSuggestions] =
//     useState<boolean>(false);

//   const allLocations: string[] = [
//     "Mumbai",
//     "Delhi",
//     "Bangalore",
//     "Kolkata",
//     "Juhu, Mumbai",
//     "Malad West, Mumbai",
//     "Andheri East, Mumbai",
//     "Mira Road East, Thane",
//     "Kandivali, Mumbai",
//     "Thane West, Thane",
//     "Vashi, Navi Mumbai",
//   ];

//   const allServices: string[] = [
//     "AC Repair Services",
//     "AC Repair Services LG",
//     "AC Repair Services Voltas",
//     "AC Repair Services Samsung",
//     "AC Repair Services Daikin",
//     "AC Repair Services Blue Star",
//     "AC Repair Services Carrier",
//   ];

//   const {
//     suggestions: locationSuggestions,
//     loading: locationLoading,
//   } = useSuggestions(location, allLocations);

//   const {
//     suggestions: serviceSuggestions,
//     loading: serviceLoading,
//   } = useSuggestions(service, allServices);

//   // CLEAN SLUG FUNCTION
//   const cleanSlug = (text: string) => {
//     return text
//       .toLowerCase()
//       .trim()
//       .replace(/,/g, "")
//       .replace(/\s+/g, "-")
//       .replace(/-+/g, "-")
//       .replace(/^-|-$/g, "");
//   };

//   const handleSearch = () => {
//     if (!location || !service) {
//       alert("Please select both location and service");
//       return;
//     }

//     let citySlug = "";
//     let areaSlug = "";

//     // CASE 1: LOCATION HAS AREA + CITY (E.g., "Juhu, Mumbai")
//     if (location.includes(",")) {
//       const parts = location.split(",");
//       areaSlug = cleanSlug(parts[0]);  // juhu
//       citySlug = cleanSlug(parts[1]);  // mumbai
//     }

//     // CASE 2: ONLY CITY (E.g., "Mumbai")
//     else {
//       citySlug = cleanSlug(location);
//       areaSlug = ""; // no area
//     }

//     const serviceSlug = cleanSlug(service);

//     let finalUrl = "";

//     // CASE A: Area + City → /mumbai/ac-services-in-juhu/
//     if (areaSlug) {
//       finalUrl = `/${citySlug}/${serviceSlug}-in-${areaSlug}/`;
//     }

//     // CASE B: Only City → /mumbai/ac-services/
//     else {
//       finalUrl = `/${citySlug}/${serviceSlug}/`;
//     }

//     router.push(finalUrl);
//   };

//   return (
//     <>
//     <div className="bg-light min-vh-100">
      

//       <Header />

//       {/* SEARCH BLOCK */}
//       <Container className="my-4">
//         <div className="d-flex flex-wrap gap-3 justify-content-center">

//           {/* Location */}
//           <div className="position-relative w-25">
//             <InputGroup className="shadow-sm rounded-pill overflow-hidden">
//               <InputGroup.Text className="bg-white border-0">
//                 <FaMapMarkerAlt className="text-primary" />
//               </InputGroup.Text>

//               <Form.Control
//                 type="text"
//                 placeholder="Select Location"
//                 value={location}
//                 onChange={(e) => {
//                   setLocation(e.target.value);
//                   setShowLocationSuggestions(true);
//                 }}
//                 onFocus={() => setShowLocationSuggestions(true)}
//               />
//             </InputGroup>

//             {showLocationSuggestions && (
//               <div className="position-absolute bg-white shadow border w-100 mt-1 rounded z-3">
//                 {locationLoading ? (
//                   <div className="p-2 text-center small text-muted">
//                     Searching...
//                   </div>
//                 ) : (
//                   <ul className="list-unstyled mb-0">
//                     {locationSuggestions.map((loc: string, idx: number) => (
//                       <li
//                         key={idx}
//                         className="px-3 py-2 hover-bg-light pointer"
//                         onClick={() => {
//                           setLocation(loc);
//                           setShowLocationSuggestions(false);
//                         }}
//                       >
//                         {loc}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Service */}
//           <div className="position-relative w-50">
//             <InputGroup className="shadow-sm rounded-pill overflow-hidden">
//               <Form.Control
//                 type="text"
//                 placeholder="Search for services..."
//                 value={service}
//                 onChange={(e) => {
//                   setService(e.target.value);
//                   setShowServiceSuggestions(true);
//                 }}
//                 onFocus={() => setShowServiceSuggestions(true)}
//               />

//               <Button
//                 variant="primary"
//                 className="rounded-pill px-4"
//                 onClick={handleSearch}
//               >
//                 <FaSearch /> Search
//               </Button>
//             </InputGroup>
           

//             {showServiceSuggestions && (
//               <div className="position-absolute bg-white shadow border w-100 mt-1 rounded z-3">
//                 {serviceLoading ? (
//                   <div className="p-2 text-center small text-muted">
//                     Loading...
//                   </div>
//                 ) : (
//                   <ul className="list-unstyled mb-0">
//                     {serviceSuggestions.map((s: string, idx: number) => (
//                       <li
//                         key={idx}
//                         className="px-3 py-2 hover-bg-light pointer"
//                         onClick={() => {
//                           setService(s);
//                           setShowServiceSuggestions(false);
//                         }}
//                       >
//                         <b>{s}</b>
//                         <br />
//                         <span className="text-muted small">Category</span>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>

//       {/* COMPONENTS */}
//        <FeaturedListings />
//       <PopularCategories />
//       <TopServices />
//       <TopCities />
//       <WhayChoose />

//     </div>
//     <Footer />
//     </>
    
//   );
// }



"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturedListings from "../components/FeaturedListings";
import PopularCategories from "../components/PopularCategories";
import TopServices from "../components/TopServices";
import TopCities from "../components/TopCities";
import WhyChooseUs from "../components/WhyChooseUs";
import SearchBlock from "../components/Search/SearchBlock";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-light min-vh-100">
        <SearchBlock />
        <FeaturedListings />
        <PopularCategories />
        <TopServices />
        <TopCities />
        <WhyChooseUs />
      </div>
      <Footer />
    </>
  );
}
