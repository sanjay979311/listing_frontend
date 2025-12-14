


import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

interface PageProps {
  params: {
    location: string;
    service: string;
  };
}

/* ----------------------------------------------
   Dynamic Metadata (SEO Optimized)
---------------------------------------------- */
export async function generateMetadata({ params }: PageProps) {
  const { location, service } = await params;

  const formattedService = service.replace(/---/g, " ").replace(/-/g, " ");
  const formattedLocation = location.replace(/-/g, " ");

  return {
    title: `Top ${formattedService} in ${formattedLocation} - Best ${formattedService} Near You | Justdial`,
    description: `${formattedService} in ${formattedLocation} - Discover reliable, fast, and professional services. Find trusted technicians offering quality service with minimal downtime.`,
    keywords: `List of ${formattedService} in ${formattedLocation}, Reviews, Address, Phone Number, Popular ${formattedService}`,
  };
}

/* ----------------------------------------------
   SERVICE LIST PAGE
---------------------------------------------- */
const ServicePage = async ({ params }: PageProps) => {
  const { location, service } = await params;

  const formattedLocation = location.replace(/-/g, " ");
  const formattedService = service.replace(/-/g, " ");

  // Sample data for listings
  const listings = [
    {
      name: "Air-Coolex",
      address: "Opposite Taltala Sitala Mondir, Taltala, Kolkata",
      rating: 4.6,
      reviews: 10,
      phone: "09008511066",
      yearsInBusiness: 30,
      comment: '"Reasonably priced"',
      suggestions: 4,
      amenities: ["AC Repair & Services", "Electrical Goods Repair & Services"],
      images: [
        "https://content.jdmagicbox.com/comp/service_catalogue/chiller-amc-repairs-and-services-033pxx33.xx33.210716170812.q8a5-a5r7wnj-250.jpg?w=640&q=75",
        "https://content.jdmagicbox.com/comp/kolkata/a5/033pxx33.xx33.210716170812.q8a5/catalogue/air-coolex-taltala-kolkata-ac-repair-and-services-bwev9p2vrq-250.jpg?w=640&q=75",
        "https://content.jdmagicbox.com/v2/comp/kolkata/a5/033pxx33.xx33.210716170812.q8a5/catalogue/air-coolex-taltala-kolkata-ac-repair-and-services-hsj2dqz1x7-250.jpg?w=640&q=75",
      ],
    },
    // Add more listings here if needed
  ];

  return (
    <>
      <Header />

      {/* Breadcrumb */}
      {/* <nav aria-label="breadcrumb" className="bg-light border-bottom py-2">
        <div className="container">
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a href={`/${location}`} className="text-decoration-none text-dark">
                {formattedLocation}
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href={`/${location}/${service}`} className="text-decoration-none text-dark">
                {formattedService} in {formattedLocation}
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href={`/${location}/${service}-commercial`} className="text-decoration-none text-dark">
                {formattedService} for Commercial in {formattedLocation}
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href={`/${location}/${service}?#listings`} className="text-decoration-none text-dark">
                {listings.length}+ Listings
              </a>
            </li>
          </ol>
        </div>
      </nav> */}
      <nav aria-label="breadcrumb" className="bg-light border-bottom py-2">
  <div className="container">
    <ol className="breadcrumb mb-0">
      {/* City */}
      <li className="breadcrumb-item">
        <Link href={`/${location}`} className="text-decoration-none text-dark">
          {formattedLocation}
        </Link>
      </li>

      {/* Category */}
      <li className="breadcrumb-item">
        <Link href={`/${location}/${service}`} className="text-decoration-none text-dark">
          {formattedService} in {formattedLocation}
        </Link>
      </li>

      {/* Subcategory */}
      <li className="breadcrumb-item">
        <Link href={`/${location}/${service}-commercial`} className="text-decoration-none text-dark">
          {formattedService} for Commercial in {formattedLocation}
        </Link>
      </li>

      {/* Listings count */}
      <li className="breadcrumb-item active" aria-current="page">
        <Link href={`/${location}/${service}?#listings`} className="text-decoration-none text-dark">
          {listings.length}+ Listings
        </Link>
      </li>
    </ol>
  </div>
</nav>


      {/* Header Section */}
      <section className="bg-white border-bottom py-3">
        <div className="container">
          <h1 className="h4 text-capitalize fw-bold mb-1">
            {formattedService} in {formattedLocation}
          </h1>
          <p className="text-muted mb-0">Showing {listings.length}+ verified listings</p>
        </div>
      </section>

      {/* Listings */}
      <div className="container my-4">
        <div className="row g-4">
          <section className="col-lg-9 col-md-8" id="listings">
            {listings.map((item, idx) => (
              <div key={idx} className="card border-0 shadow-sm mb-4 p-3">
                <div className="d-flex justify-content-between">
                  {/* Info */}
                  <div style={{ flex: 1 }}>
                    <h5 className="fw-bold text-capitalize mb-2">{item.name}</h5>

                    {/* Rating */}
                    <div className="d-flex align-items-center mb-2">
                      <span className="badge bg-success px-3 py-2 fs-6">{item.rating} ★</span>
                      <small className="text-muted ms-2">({item.reviews} Ratings)</small>
                    </div>

                    {/* Address & Phone */}
                    <p className="text-muted mb-1">{item.address}</p>
                    <p className="fw-semibold mb-2">📞 {item.phone}</p>

                    {/* Amenities */}
                    <div>
                      {item.amenities.map((amenity, i) => (
                        <span key={i} className="badge text-bg-light border me-2">{amenity}</span>
                      ))}
                    </div>

                    {/* Years in business & comment */}
                    <div className="mt-2">
                      <span className="me-3">{item.yearsInBusiness} Years in Business</span>
                      <span>{item.comment} ({item.suggestions} Suggestions)</span>
                    </div>

                    {/* Image Carousel */}
                    <div className="d-flex mt-2 overflow-auto" style={{ gap: "5px" }}>
                      {item.images.map((img, i) => (
                        <img key={i} src={img} alt={`${item.name} image ${i + 1}`} style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px" }} />
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-end ms-3" style={{ minWidth: "120px" }}>
                    <button className="btn btn-primary btn-sm w-100 mb-2">Call Now</button>
                    <button className="btn btn-outline-secondary btn-sm w-100">Get Best Price</button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
