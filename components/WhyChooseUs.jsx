"use client";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: "fas fa-user-check text-success",
      title: "Verified & Trusted Services",
      desc: "Every service provider is carefully reviewed to ensure authenticity, quality, and reliability.",
    },
    {
      id: 2,
      icon: "fas fa-user-shield text-primary",
      title: "Safe & Secure Platform",
      desc: "Your privacy and data security are prioritized with secure browsing and protected interactions.",
    },
    {
      id: 3,
      icon: "fas fa-headset text-warning",
      title: "24/7 Customer Support",
      desc: "Our support team is available at any time to help you with fast and reliable assistance.",
    },
  ];

  return (
    <div className="container mb-5 pb-5">

      {/* Title Row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="section-title">
          <i className="fas fa-star text-warning me-2"></i>
          Why Choose Us
        </h2>

        <a href="/about" className="btn btn-outline-primary">
          Learn More
        </a>
      </div>

      {/* Feature Cards */}
      <div className="row g-4">
        {features.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6">

            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 text-center">

                <div className="mb-3">
                  <i className={`${item.icon} fa-3x`}></i>
                </div>

                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>

              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
