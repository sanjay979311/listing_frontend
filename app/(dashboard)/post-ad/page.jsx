// "use client";

// import { useState } from "react";
// import Header from '../../../components/Header';
// import Footer from '../../../components/Footer';


// export default function PostAdPage() {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle posting logic
//     alert(`Title: ${title}\nCategory: ${category}\nPrice: ${price}\nDescription: ${description}`);
//   };

//   return (
//     <>
//     <Header />
//      <div className="d-flex justify-content-center align-items-start py-5 bg-light">
//       <div className="card shadow-sm border-0 rounded-3 p-4 w-100" style={{ maxWidth: "600px" }}>
//         <h3 className="text-center mb-4 fw-bold text-dark">Post a New Ad</h3>

//         <form onSubmit={handleSubmit}>
//           {/* Title */}
//           <div className="mb-3">
//             <label htmlFor="title" className="form-label">Ad Title</label>
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               id="title"
//               placeholder="Enter ad title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//             />
//           </div>

//           {/* Category */}
//           <div className="mb-3">
//             <label htmlFor="category" className="form-label">Category</label>
//             <select
//               className="form-select form-select-lg"
//               id="category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//             >
//               <option value="">Select a category</option>
//               <option value="home-services">Home Services</option>
//               <option value="repair-maintenance">Repair & Maintenance</option>
//               <option value="beauty-care">Beauty & Personal Care</option>
//               <option value="lessons-training">Lessons & Training</option>
//               <option value="community-support">Community Support</option>
//             </select>
//           </div>

//           {/* Description */}
//           <div className="mb-3">
//             <label htmlFor="description" className="form-label">Description</label>
//             <textarea
//               className="form-control"
//               id="description"
//               placeholder="Write a detailed description..."
//               rows={4}
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               required
//             ></textarea>
//           </div>

//           {/* Price */}
//           <div className="mb-3">
//             <label htmlFor="price" className="form-label">Price (optional)</label>
//             <input
//               type="number"
//               className="form-control form-control-lg"
//               id="price"
//               placeholder="Enter price"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary w-100 fw-semibold mt-3">Post Ad</button>
//         </form>
//       </div>
//     </div>
//      <Footer />
//     </>
   
//   );
// }

"use client";

import { useState } from "react";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './style.css';

export default function PostAdForm() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const states = [
    "Delhi", "Maharashtra", "Karnataka" // Add more as needed
  ];

  const cities = {
    "Delhi": ["New Delhi", "Dwarka", "Rohini", "Karol Bagh"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
    "Karnataka": ["Bangalore", "Mysore", "Mangalore", "Hubli"],
  };

  const areas = {
    "New Delhi": [
      { id: 101, name: "Connaught Place" },
      { id: 102, name: "Karol Bagh" },
      { id: 103, name: "Janakpuri" },
    ],
    "Mumbai": [
      { id: 201, name: "Bandra" },
      { id: 202, name: "Andheri" },
      { id: 203, name: "Dadar" },
    ],
    "Bangalore": [
      { id: 301, name: "MG Road" },
      { id: 302, name: "Koramangala" },
      { id: 303, name: "Whitefield" },
    ],
  };

  const handleImageChange = (e) => {
    if (e.target.files) setImages(Array.from(e.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ad submitted!");
  };

  return (
    <>
      <Header />
      <div className="post-ad-form container py-5">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="row g-4">
            {/* Left Column */}
            <div className="col-lg-8">
              {/* Basic Info */}
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0"><i className="fas fa-info-circle me-2"></i>Basic Information</h5>
                </div>
                <div className="card-body p-4">
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <i className="fas fa-heading text-primary me-2"></i>Ad Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="form-control form-control-lg"
                      placeholder="e.g., iPhone 13 Pro Max in excellent condition"
                      required
                      maxLength={140}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <i className="fas fa-align-left text-primary me-2"></i>Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="description"
                      rows={6}
                      className="form-control"
                      placeholder="Describe your item in detail. Include features, condition, reason for selling, etc."
                      required
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0"><i className="fas fa-images me-2"></i>Photos (Up to 5 images)</h5>
                </div>
                <div className="card-body p-4">
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <i className="fas fa-upload text-success me-2"></i>Upload Images
                    </label>
                    <input
                      type="file"
                      className="form-control form-control-lg"
                      multiple
                      accept=".jpg,.jpeg,.png,.webp"
                      onChange={handleImageChange}
                    />
                  </div>

                  {images.length > 0 && (
                    <div className="image-preview-container mb-3">
                      <h6 className="fw-bold text-muted mb-3">Image Preview:</h6>
                      <div className="row g-2">
                        {images.map((file, idx) => (
                          <div className="col-4" key={idx}>
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Preview ${idx}`}
                              className="img-fluid rounded"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label fw-bold">
                      <i className="fas fa-link text-info me-2"></i>Or Add Image URLs
                    </label>
                    <textarea
                      className="form-control"
                      rows={3}
                      value={imageURLs}
                      onChange={(e) => setImageURLs(e.target.value)}
                      placeholder="https://example.com/image1.jpg"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4">
              {/* Category & Location */}
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-header bg-info text-white">
                  <h5 className="mb-0"><i className="fas fa-map-marker-alt me-2"></i>Category & Location</h5>
                </div>
                <div className="card-body p-4">
                  <div className="mb-4">
                    <label className="form-label fw-bold">Category <span className="text-danger">*</span></label>
                    <select name="category_id" className="form-select form-select-lg" required>
                      <option value="">Choose a category...</option>
                      <option value="electronics">Electronics</option>
                      <option value="furniture">Furniture</option>
                      <option value="vehicles">Vehicles</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="jobs">Jobs</option>
                      <option value="fashion">Fashion & Accessories</option>
                      <option value="services">Services</option>
                      <option value="hobbies">Hobbies & Sports</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">State <span className="text-danger">*</span></label>
                    <select
                      name="state"
                      className="form-select form-select-lg"
                      required
                      value={selectedState}
                      onChange={(e) => { setSelectedState(e.target.value); setSelectedCity(""); setSelectedArea(""); }}
                    >
                      <option value="">Select your state...</option>
                      {states.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">City <span className="text-danger">*</span></label>
                    <select
                      name="city"
                      className="form-select form-select-lg"
                      required
                      disabled={!selectedState}
                      value={selectedCity}
                      onChange={(e) => { setSelectedCity(e.target.value); setSelectedArea(""); }}
                    >
                      <option value="">First select a state...</option>
                      {selectedState && cities[selectedState]?.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>

                  {/* Area Dropdown */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">Area/Locality (Optional)</label>
                    <select
                      name="area"
                      className="form-select form-select-lg"
                      disabled={!selectedCity}
                      value={selectedArea}
                      onChange={(e) => setSelectedArea(e.target.value)}
                    >
                      <option value="">Select your area (optional)...</option>
                      {selectedCity && areas[selectedCity]?.map((area) => (
                        <option key={area.id} value={area.id}>{area.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="card shadow-sm border-0 mb-4">
                <div className="card-header bg-warning text-dark">
                  <h5 className="mb-0"><i className="fas fa-phone me-2"></i>Contact Information</h5>
                </div>
                <div className="card-body p-4">
                  <div className="mb-4">
                    <label className="form-label fw-bold">Phone Number</label>
                    <input name="phone" type="tel" className="form-control form-control-lg" placeholder="e.g., +919619641822" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-bold">WhatsApp Number</label>
                    <input name="whatsapp" type="tel" className="form-control form-control-lg" placeholder="e.g., +919619641822" />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="card shadow-sm border-0">
                <div className="card-body p-4 text-center">
                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    Post My Ad
                  </button>
                  <p className="text-muted small mt-2">
                    Your ad will be reviewed and published within 24 hours.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
