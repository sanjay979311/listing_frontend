// "use client";

// import { useState } from "react";
// import { Form, InputGroup } from "react-bootstrap";
// import { FaMapMarkerAlt } from "react-icons/fa";
// // import { useSuggestions } from "../../hooks/useSuggestions";
// import {useSuggestions} from '../hooks/useSuggestions'

// export default function LocationInput({ location, setLocation }) {
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const allLocations = [
//     "Mumbai",
//     "Delhi",
//     "Bangalore",
//     "Kolkata",
//     "Juhu, Mumbai",
//     "Malad West, Mumbai",
//     "Andheri East, Mumbai",
//   ];

//   const { suggestions, loading } = useSuggestions(location, allLocations);

//   return (
//     <div className="position-relative w-25">
//       <InputGroup className="shadow-sm rounded-pill overflow-hidden">
//         <InputGroup.Text className="bg-white border-0">
//           <FaMapMarkerAlt className="text-primary" />
//         </InputGroup.Text>
//         <Form.Control
//           type="text"
//           placeholder="Select Location"
//           value={location}
//           onChange={(e) => {
//             setLocation(e.target.value);
//             setShowSuggestions(true);
//           }}
//           onFocus={() => setShowSuggestions(true)}
//         />
//       </InputGroup>

//       {showSuggestions && (
//         <div className="position-absolute bg-white shadow border w-100 mt-1 rounded z-3">
//           {loading ? (
//             <div className="p-2 text-center small text-muted">Searching...</div>
//           ) : (
//             <ul className="list-unstyled mb-0">
//               {suggestions.map((loc, idx) => (
//                 <li
//                   key={idx}
//                   className="px-3 py-2 hover-bg-light pointer"
//                   onClick={() => {
//                     setLocation(loc);
//                     setShowSuggestions(false);
//                   }}
//                 >
//                   {loc}
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

import { useState, useMemo } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";

import { useGetLocationQuery } from '../../redux/services/locationApi';

export default function LocationInput({ location, setLocation }) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Fetch live suggestions from backend
  const { data: apiLocations = [], isLoading, isError } = useGetLocationQuery();

  // Filter suggestions based on input
  const filteredSuggestions = useMemo(() => {
    if (!location.trim()) return [];
    const search = location.toLowerCase();
    return apiLocations.filter((loc) => loc.toLowerCase().includes(search));
  }, [location, apiLocations]);

  return (
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
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
        />
      </InputGroup>

      {showSuggestions && (
        <div className="position-absolute bg-white shadow border w-100 mt-1 rounded z-3">
          {isLoading ? (
            <div className="p-2 text-center small text-muted">Loading...</div>
          ) : isError ? (
            <div className="p-2 text-center small text-danger">Failed to load locations</div>
          ) : filteredSuggestions.length === 0 ? (
            <div className="p-2 text-center small text-muted">No results found</div>
          ) : (
            <ul className="list-unstyled mb-0">
              {filteredSuggestions.map((loc, idx) => (
                <li
                  key={idx}
                  className="px-3 py-2 hover-bg-light pointer"
                  onClick={() => {
                    setLocation(loc);
                    setShowSuggestions(false);
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
  );
}
