import React from "react";

const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      title: "Premium Wireless Headphones",
      excerpt: "Crystal-clear sound, noise cancellation, and 40-hour battery life.",
      location: "Mumbai",
      category: "Electronics",
      time: "2 days ago",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 2,
      title: "Modern Wooden Chair",
      excerpt: "Handcrafted premium wooden chair for home and office.",
      location: "Pune",
      category: "Furniture",
      time: "1 week ago",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 3,
      title: "Smart Fitness Watch",
      excerpt: "Track your health metrics, calls, and notifications.",
      location: "Delhi",
      category: "Wearables",
      time: "3 days ago",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
      id: 4,
      title: "Ultra-Slim Laptop",
      excerpt: "Powerful performance with an elegant aluminum design.",
      location: "Bangalore",
      category: "Computers",
      time: "5 days ago",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    }
  ];

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">
          <i className="fas fa-fire text-danger me-2"></i>
          Featured Listings
        </h2>
        <a href="/products" className="btn btn-outline-primary">View All</a>
      </div>

      <div className="row g-4">
        {listings.map(item => (
          <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
              />

              <div className="card-body p-3">
                <h6 className="fw-bold mb-2">{item.title}</h6>
                <p className="text-muted small mb-2">{item.excerpt}</p>

                <div className="mb-2">
                  <small className="text-muted">
                    <i className="fas fa-map-marker-alt me-1"></i>
                    {item.location}
                  </small>
                  <small className="text-muted ms-3">
                    <i className="fas fa-tag me-1"></i>
                    {item.category}
                  </small>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{item.time}</small>
                  <a href="#" className="btn btn-primary btn-sm">View</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FeaturedListings;
