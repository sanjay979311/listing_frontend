import React from "react";

const TopCities = () => {
  const cities = [
    {
      id: 1,
      name: "Mumbai",
      state: "Maharashtra",
      ads: 51,
      url: "/maharashtra/mumbai",
    },
    {
      id: 2,
      name: "Delhi",
      state: "Delhi",
      ads: 0,
      url: "/delhi/delhi",
    },
    {
      id: 3,
      name: "Kolkata",
      state: "West Bengal",
      ads: 51,
      url: "/west-bengal/kolkata",
    },
    {
      id: 4,
      name: "Pune",
      state: "Maharashtra",
      ads: 51,
      url: "/maharashtra/pune",
    },
    {
      id: 5,
      name: "Hyderabad",
      state: "Telangana",
      ads: 51,
      url: "/telangana/hyderabad",
    },
    {
      id: 6,
      name: "Chennai",
      state: "Tamil Nadu",
      ads: 51,
      url: "/tamil-nadu/chennai",
    },
    {
      id: 7,
      name: "Bangalore",
      state: "Karnataka",
      ads: 51,
      url: "/karnataka/bangalore",
    },
    {
      id: 8,
      name: "Navi Mumbai",
      state: "Maharashtra",
      ads: 51,
      url: "/maharashtra/navi-mumbai",
    },
  ];

  return (
    <div className="container  mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="section-title">
          <i className="fas fa-map-marker-alt text-danger me-2"></i>
          Top Cities
        </h2>
        <a href="/cities" className="btn btn-outline-primary">
          View All
        </a>
      </div>

      <div className="row g-4">
        {cities.map((city) => (
          <div key={city.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="city-card card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center">
                  <div className="city-icon me-3">
                    <i className="fas fa-city fa-2x text-info"></i>
                  </div>

                  <div className="flex-grow-1">
                    <h5 className="card-title fw-bold mb-1">{city.name}</h5>
                    <p className="text-muted mb-2">{city.state}</p>
                    <span className="badge bg-primary">{city.ads} ads</span>
                  </div>

                  <a href={city.url} className="btn btn-outline-primary btn-sm">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCities;
