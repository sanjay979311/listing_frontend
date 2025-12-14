// "use client";

// import { useState } from "react";
// import { Form, InputGroup, Button } from "react-bootstrap";
// import { FaSearch } from "react-icons/fa";
// import {useSuggestions} from '../hooks/useSuggestions';
// import { useGetCategoriesQuery } from "@/redux/services/categoryApi";

// export default function ServiceInput({ service, setService, onSearch }) {
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const allServices = [
//     "AC Repair Services",
//     "AC Repair Services LG",
//     "AC Repair Services Voltas",
//   ];

//   const {data:categoryList} = useGetCategoriesQuery();
//   console.log("categoryList =======",categoryList)

//   const { suggestions, loading } = useSuggestions(service, allServices);

//   return (
//     <div className="position-relative w-50">
//       <InputGroup className="shadow-sm rounded-pill overflow-hidden">
//         <Form.Control
//           type="text"
//           placeholder="Search for services..."
//           value={service}
//           onChange={(e) => {
//             setService(e.target.value);
//             setShowSuggestions(true);
//           }}
//           onFocus={() => setShowSuggestions(true)}
//         />
//         <Button variant="primary" className="rounded-pill px-4" onClick={onSearch}>
//           <FaSearch /> Search
//         </Button>
//       </InputGroup>

//       {showSuggestions && (
//         <div className="position-absolute bg-white shadow border w-100 mt-1 rounded z-3">
//           {loading ? (
//             <div className="p-2 text-center small text-muted">Loading...</div>
//           ) : (
//             <ul className="list-unstyled mb-0">
//               {suggestions.map((s, idx) => (
//                 <li
//                   key={idx}
//                   className="px-3 py-2 hover-bg-light pointer"
//                   onClick={() => {
//                     setService(s);
//                     setShowSuggestions(false);
//                   }}
//                 >
//                   <b>{s}</b>
//                   <br />
//                   <span className="text-muted small">Category</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useSuggestions } from "../hooks/useSuggestions";
import { useGetCategoriesQuery } from "@/redux/services/categoryApi";

export default function ServiceInput({ service, setService, onSearch }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);

  // Fetch categories from API
  const { data: categoryList = [], isLoading, isError } = useGetCategoriesQuery();

  // Extract category names
  const categoryNames = useMemo(() => categoryList.map((cat) => cat.name), [categoryList]);

  // Use suggestions hook to filter categories
  const { suggestions, loading } = useSuggestions(service, categoryNames);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="position-relative w-50">
      <InputGroup className="shadow-sm rounded-pill overflow-hidden">
        <Form.Control
          type="text"
          placeholder="Search for services..."
          value={service}
          onChange={(e) => {
            setService(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
        />
        <Button
          variant="primary"
          className="rounded-pill px-4"
          onClick={() => onSearch(service)}
        >
          <FaSearch /> Search
        </Button>
      </InputGroup>

      {showSuggestions && (
        <div
          className="position-absolute bg-white shadow border w-100 mt-1 rounded z-3"
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          {isLoading || loading ? (
            <div className="p-2 text-center small text-muted">Loading...</div>
          ) : isError ? (
            <div className="p-2 text-center small text-danger">Failed to load categories</div>
          ) : categoryNames.length === 0 ? (
            <div className="p-2 text-center small text-muted">No categories found</div>
          ) : (
            <ul className="list-unstyled mb-0">
              {(service ? suggestions : categoryNames).map((s, idx) => (
                <li
                  key={idx}
                  className="px-3 py-2 hover-bg-light pointer"
                  onClick={() => {
                    setService(s);
                    setShowSuggestions(false);
                    onSearch(s);
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
  );
}
