// "use client";

// import { useParams } from "next/navigation";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Image from "next/image";

// export default function ServicePage() {
//   const params = useParams();
//   let location = params.location;
//   let service = params.service;

//   // Ensure strings
//   if (Array.isArray(location)) location = location[0];
//   if (Array.isArray(service)) service = service[0];

//   const serviceTitle = service?.replace(/-/g, " ") || "";
//   const listingsCount = "3432+";

//   const topServices = [
//     { name: "SecurePro Guards", description: "24/7 Security Services", rating: 4.5 },
//     { name: "SafeWatch Security", description: "Corporate & Residential Guards", rating: 4.3 },
//     { name: "Guardian Security", description: "Experienced Security Professionals", rating: 4.7 },
//   ];

//   return (
//     <div className="bg-light min-vh-100">
//       {/* HEADER */}
//       <header className="bg-white shadow-sm sticky-top py-3">
//         <Container className="d-flex justify-content-between align-items-center">
//           <h1 className="text-primary fw-bold m-0">FindServices</h1>
//         </Container>
//       </header>

//       {/* PAGE HEADER */}
//       <Container className="py-5 text-center">
//         <h2 className="fw-bold display-6">{serviceTitle} in {location}</h2>
//         <p className="text-muted fs-5">{serviceTitle} Services in {location}</p>
//         <p className="text-primary fw-semibold">{listingsCount} Listings</p>
//         <p className="text-muted">Security Service Providers for Guards in {location}</p>
//       </Container>

//       {/* TOP SERVICES LIST */}
//       <Container className="py-5">
//         <h3 className="fw-semibold mb-4">Top Service Providers</h3>
//         <Row className="g-4">
//           {topServices.map((item, idx) => (
//             <Col key={idx} md={12}>
//               <Card className="shadow-sm border-0 p-3 d-flex flex-row align-items-center gap-3 hover-shadow">
//                 <Image src="/placeholder.svg" alt={item.name} width={80} height={80} className="rounded" />
//                 <div>
//                   <h5 className="fw-bold m-0">{item.name}</h5>
//                   <p className="text-muted mb-1 small">{item.description}</p>
//                   <p className="text-primary fw-semibold small m-0">Rating: {item.rating}★</p>
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* FOOTER */}
//       <footer className="bg-white border-top py-4 text-center text-muted">
//         © {new Date().getFullYear()} FindServices — Inspired by Justdial UI
//       </footer>
//     </div>
//   );
// }

import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ServicePage({ params }) {
  const location = decodeURIComponent(
    Array.isArray(params.location) ? params.location[0] : params.location
  );
  const service = decodeURIComponent(
    Array.isArray(params.service) ? params.service[0] : params.service
  );
  const serviceTitle = service?.replace(/-/g, " ") || "";

  if (!location || !service) return notFound();

  const listingsCount = "3432+";
  const topServices = [
    { name: "SecurePro Guards", description: "24/7 Security Services", rating: 4.5 },
    { name: "SafeWatch Security", description: "Corporate & Residential Guards", rating: 4.3 },
    { name: "Guardian Security", description: "Experienced Security Professionals", rating: 4.7 },
  ];

  return (
    <div className="bg-light min-vh-100">
      <header className="bg-white shadow-sm sticky-top py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <h1 className="text-primary fw-bold m-0">FindServices</h1>
        </Container>
      </header>

      <Container className="py-5 text-center">
        <h2 className="fw-bold display-6">{serviceTitle} in {location}</h2>
        <p className="text-muted fs-5">{serviceTitle} Services in {location}</p>
        <p className="text-primary fw-semibold">{listingsCount} Listings</p>
        <p className="text-muted">Trusted service providers for {serviceTitle} in {location}</p>
      </Container>

      <Container className="py-5">
        <h3 className="fw-semibold mb-4">Top Service Providers</h3>
        <Row className="g-4">
          {topServices.map((item, idx) => (
            <Col key={idx} md={12}>
              <Card className="shadow-sm border-0 p-3 d-flex flex-row align-items-center gap-3 hover-shadow">
                <Image src="/placeholder.svg" alt={`${item.name} logo`} width={80} height={80} className="rounded" />
                <div>
                  <h5 className="fw-bold m-0">{item.name}</h5>
                  <p className="text-muted mb-1 small">{item.description}</p>
                  <p className="text-primary fw-semibold small m-0">Rating: {item.rating}★</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="bg-white border-top py-4 text-center text-muted">
        © {new Date().getFullYear()} FindServices — Inspired by Justdial UI
      </footer>
    </div>
  );
}
