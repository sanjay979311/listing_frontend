

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

// import PopularCategories from "./components/PopularCategories";
// import TopServices from "./components/TopServices";

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
//     "AC Repair Services - LG",
//     "AC Repair Services - Voltas",
//     "AC Repair Services - Samsung",
//     "AC Repair Services - Daikin",
//     "AC Repair Services - Blue Star",
//     "AC Repair Services - Carrier",
//   ];

//   const {
//     suggestions: locationSuggestions,
//     loading: locationLoading,
//   } = useSuggestions(location, allLocations);

//   const {
//     suggestions: serviceSuggestions,
//     loading: serviceLoading,
//   } = useSuggestions(service, allServices);

//   const handleSearch = () => {
//     if (!location || !service) {
//       alert("Please select both location and service");
//       return;
//     }

//     const locationSlug = location.replace(/\s+/g, "-");
//     const serviceSlug = service.replace(/\s+/g, "-");

//     router.push(`/${locationSlug}/${serviceSlug}`);
//   };

//   return (
//     <div className="bg-light min-vh-100">
//       {/* HEADER */}
//       <header className="bg-white shadow-sm sticky-top py-3">
//         <Container className="d-flex justify-content-between align-items-center">
//           <h1 className="text-primary fw-bold m-0">FindServices</h1>
//           <Button variant="primary" className="rounded-pill px-4">
//             Login
//           </Button>
//         </Container>
//       </header>

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
//       <PopularCategories />

//       <TopServices />

//     </div>
//   );
// }


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

// import PopularCategories from "./components/PopularCategories";
// import TopServices from "./components/TopServices";

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
//     "AC Repair Services - LG",
//     "AC Repair Services - Voltas",
//     "AC Repair Services - Samsung",
//     "AC Repair Services - Daikin",
//     "AC Repair Services - Blue Star",
//     "AC Repair Services - Carrier",
//   ];

//   const {
//     suggestions: locationSuggestions,
//     loading: locationLoading,
//   } = useSuggestions(location, allLocations);

//   const {
//     suggestions: serviceSuggestions,
//     loading: serviceLoading,
//   } = useSuggestions(service, allServices);

//   // CLEAN SLUG FUNCTION (single hyphen only)
//   const cleanSlug = (text: string) => {
//     return text
//       .trim()
//       .replace(/\s+/g, "-")   // convert spaces to hyphens
//       .replace(/-+/g, "-")    // remove multiple hyphens
//       .replace(/^-|-$/g, "")  // remove hyphens at start/end
//       .toLowerCase();
//   };

//   const handleSearch = () => {
//     if (!location || !service) {
//       alert("Please select both location and service");
//       return;
//     }

//     const locationSlug = cleanSlug(location);
//     const serviceSlug = cleanSlug(service);

//     router.push(`/${locationSlug}/${serviceSlug}`);
//   };

//   return (
//     <div className="bg-light min-vh-100">

//       {/* HEADER */}
//       <header className="bg-white shadow-sm sticky-top py-3">
//         <Container className="d-flex justify-content-between align-items-center">
//           <h1 className="text-primary fw-bold m-0">FindServices</h1>
//           <Button variant="primary" className="rounded-pill px-4">
//             Login
//           </Button>
//         </Container>
//       </header>

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
//       <PopularCategories />
//       <TopServices />

//     </div>
//   );
// }



"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

import {
  Container,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";

import { useSuggestions } from "./search/useSuggestions";

import PopularCategories from "./components/PopularCategories";
import TopServices from "./components/TopServices";

export default function Home(): React.JSX.Element {
  const router = useRouter();

  const [location, setLocation] = useState<string>("");
  const [service, setService] = useState<string>("");

  const [showLocationSuggestions, setShowLocationSuggestions] =
    useState<boolean>(false);
  const [showServiceSuggestions, setShowServiceSuggestions] =
    useState<boolean>(false);

  const allLocations: string[] = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Juhu, Mumbai",
    "Malad West, Mumbai",
    "Andheri East, Mumbai",
    "Mira Road East, Thane",
    "Kandivali, Mumbai",
    "Thane West, Thane",
    "Vashi, Navi Mumbai",
  ];

  const allServices: string[] = [
    "AC Repair Services",
    "AC Repair Services LG",
    "AC Repair Services Voltas",
    "AC Repair Services Samsung",
    "AC Repair Services Daikin",
    "AC Repair Services Blue Star",
    "AC Repair Services Carrier",
  ];

  const {
    suggestions: locationSuggestions,
    loading: locationLoading,
  } = useSuggestions(location, allLocations);

  const {
    suggestions: serviceSuggestions,
    loading: serviceLoading,
  } = useSuggestions(service, allServices);

  // CLEAN SLUG FUNCTION
  const cleanSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/,/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  };

  const handleSearch = () => {
    if (!location || !service) {
      alert("Please select both location and service");
      return;
    }

    let citySlug = "";
    let areaSlug = "";

    // CASE 1: LOCATION HAS AREA + CITY (E.g., "Juhu, Mumbai")
    if (location.includes(",")) {
      const parts = location.split(",");
      areaSlug = cleanSlug(parts[0]);  // juhu
      citySlug = cleanSlug(parts[1]);  // mumbai
    }

    // CASE 2: ONLY CITY (E.g., "Mumbai")
    else {
      citySlug = cleanSlug(location);
      areaSlug = ""; // no area
    }

    const serviceSlug = cleanSlug(service);

    let finalUrl = "";

    // CASE A: Area + City → /mumbai/ac-services-in-juhu/
    if (areaSlug) {
      finalUrl = `/${citySlug}/${serviceSlug}-in-${areaSlug}/`;
    }

    // CASE B: Only City → /mumbai/ac-services/
    else {
      finalUrl = `/${citySlug}/${serviceSlug}/`;
    }

    router.push(finalUrl);
  };

  return (
    <div className="bg-light min-vh-100">

      {/* HEADER */}
      <header className="bg-white shadow-sm sticky-top py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <h1 className="text-primary fw-bold m-0">FindServices</h1>
          <Button variant="primary" className="rounded-pill px-4">
            Login
          </Button>
        </Container>
      </header>

      {/* SEARCH BLOCK */}
      <Container className="my-4">
        <div className="d-flex flex-wrap gap-3 justify-content-center">

          {/* Location */}
          <div className="position-relative w-25">
            <InputGroup className="shadow-sm rounded-pill overflow-hidden">
              <InputGroup.Text className="bg-white border-0">
                <FaMapMarkerAlt className="text-primary" />
              </InputGroup.Text>

              <Form.Control
                type="text"
                placeholder="Select Location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setShowLocationSuggestions(true);
                }}
                onFocus={() => setShowLocationSuggestions(true)}
              />
            </InputGroup>

            {showLocationSuggestions && (
              <div className="position-absolute bg-white shadow border w-100 mt-1 rounded z-3">
                {locationLoading ? (
                  <div className="p-2 text-center small text-muted">
                    Searching...
                  </div>
                ) : (
                  <ul className="list-unstyled mb-0">
                    {locationSuggestions.map((loc: string, idx: number) => (
                      <li
                        key={idx}
                        className="px-3 py-2 hover-bg-light pointer"
                        onClick={() => {
                          setLocation(loc);
                          setShowLocationSuggestions(false);
                        }}
                      >
                        {loc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Service */}
          <div className="position-relative w-50">
            <InputGroup className="shadow-sm rounded-pill overflow-hidden">
              <Form.Control
                type="text"
                placeholder="Search for services..."
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  setShowServiceSuggestions(true);
                }}
                onFocus={() => setShowServiceSuggestions(true)}
              />

              <Button
                variant="primary"
                className="rounded-pill px-4"
                onClick={handleSearch}
              >
                <FaSearch /> Search
              </Button>
            </InputGroup>

            {showServiceSuggestions && (
              <div className="position-absolute bg-white shadow border w-100 mt-1 rounded z-3">
                {serviceLoading ? (
                  <div className="p-2 text-center small text-muted">
                    Loading...
                  </div>
                ) : (
                  <ul className="list-unstyled mb-0">
                    {serviceSuggestions.map((s: string, idx: number) => (
                      <li
                        key={idx}
                        className="px-3 py-2 hover-bg-light pointer"
                        onClick={() => {
                          setService(s);
                          setShowServiceSuggestions(false);
                        }}
                      >
                        <b>{s}</b>
                        <br />
                        <span className="text-muted small">Category</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* COMPONENTS */}
      <PopularCategories />
      <TopServices />

    </div>
  );
}
