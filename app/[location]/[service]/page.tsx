
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// export default function ServicePage({ params }) {
//   const location = decodeURIComponent(
//     Array.isArray(params.location) ? params.location[0] : params.location
//   );
//   const service = decodeURIComponent(
//     Array.isArray(params.service) ? params.service[0] : params.service
//   );
//   const serviceTitle = service?.replace(/-/g, " ") || "";

//   if (!location || !service) return notFound();

//   const listingsCount = "3432+";
//   const topServices = [
//     { name: "SecurePro Guards", description: "24/7 Security Services", rating: 4.5 },
//     { name: "SafeWatch Security", description: "Corporate & Residential Guards", rating: 4.3 },
//     { name: "Guardian Security", description: "Experienced Security Professionals", rating: 4.7 },
//   ];

//   return (
//     <div className="bg-light min-vh-100">
//       <header className="bg-white shadow-sm sticky-top py-3">
//         <Container className="d-flex justify-content-between align-items-center">
//           <h1 className="text-primary fw-bold m-0">FindServices</h1>
//         </Container>
//       </header>

//       <Container className="py-5 text-center">
//         <h2 className="fw-bold display-6">{serviceTitle} in {location}</h2>
//         <p className="text-muted fs-5">{serviceTitle} Services in {location}</p>
//         <p className="text-primary fw-semibold">{listingsCount} Listings</p>
//         <p className="text-muted">Trusted service providers for {serviceTitle} in {location}</p>
//       </Container>

//       <Container className="py-5">
//         <h3 className="fw-semibold mb-4">Top Service Providers</h3>
//         <Row className="g-4">
//           {topServices.map((item, idx) => (
//             <Col key={idx} md={12}>
//               <Card className="shadow-sm border-0 p-3 d-flex flex-row align-items-center gap-3 hover-shadow">
//                 <Image src="/placeholder.svg" alt={`${item.name} logo`} width={80} height={80} className="rounded" />
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

//       <footer className="bg-white border-top py-4 text-center text-muted">
//         © {new Date().getFullYear()} FindServices — Inspired by Justdial UI
//       </footer>
//     </div>
//   );
// }



// "use client";

// import { useParams } from "next/navigation";

// export default function ClientPage() {
//   const params = useParams();

//   console.log("Client Params: ", params);

//   return (
//     <div>
//       <h1>{params.location}</h1>
//       <h2>{params.service}</h2>
//     </div>
//   );
// }


// export async function generateMetadata({ params }) {
//   const { slug } = params;

//   // Fetch SEO metadata dynamically from API
//   let response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/lms/frontend/course/course-seo/${slug}`, {
//     cache: 'no-store',
//   });

// export async function generateMetadata({ params }) {
//   return {
//     title: `${params?.service} in ${params?.location} | FindServices`,
//     description: `Find top ${params?.service} services in ${params?.location}. Browse verified listings, ratings, and trusted providers.`,
//   };
// }

// export default function ServicePage({ params }) {
//   console.log("params is =======>",params)
//   return (
//     <div>
//       <h1>{params?.location}</h1>
//       <h2>{params?.service}</h2>
//     </div>
//   );
// }



interface PageProps {
  params: {
    location: string;
    service: string;
  };
}

// export async function generateMetadata({ params }: PageProps) {
//  const { location, service } = await params;

//   const formattedService = service
//     .replace(/---/g, " ")
//     .replace(/-/g, " ")
//     .replace(/\s+/g, " ")
//     .trim();

//   const formattedLocation = location
//     .replace(/-/g, " ")
//     .trim();

//   const title = `Top ${formattedService} in ${formattedLocation} - Best ${formattedService} near me - Justdial`;

//   const description = `${formattedService} in ${formattedLocation} - Ensure your business stays cool with top-notch AC repairs and services. Beat the heat with quick, reliable solutions that minimize downtime. From installation to emergency repairs, find expert technicians to keep your workplace comfortable. Get your free quote today!`;

//   const keywords = `List of ${formattedService} in ${formattedLocation}, Reviews, Map, Address, Phone Number, Contact Number, local, popular ${formattedService}, ${formattedService}`;

//   return {
//     title: title,
//     description: description,

//     // Extra Justdial-type meta tags
//     other: {
//       "theme-color": "#fff",
//       "Title": title,
//       "keywords": keywords,

//       // Twitter Cards
//       "twitter:title": title,
//       "twitter:description": description,
//       "twitter:image": "https://akam.cdn.jdmagicbox.com/images/icontent/jd-logo_nw.png",
//       "twitter:card": "summary_large_image",
//     },

//     // DNS Prefetch & Preconnect
//     icons: {
//       icon: "https://akam.cdn.jdmagicbox.com/images/icontent/jd-logo_nw.png",
//     },

//     alternates: {
//       canonical: `/${location}/${service}`,
//     },

//     // Preconnect Links
//     otherLinks: [
//       { rel: "dns-prefetch", href: "//akam.cdn.jdmagicbox.com" },
//       { rel: "dns-prefetch", href: "//content.jdmagicbox.com" },
//       { rel: "preconnect", href: "//content.jdmagicbox.com" },
//       { rel: "preconnect", href: "https://fonts.googleapis.com" },
//       { rel: "preconnect", href: "https://fonts.gstatic.com" },
//     ],
//   };
// }

// const ServicePage = async ({ params }: PageProps) => {
//   const { location, service } = await params;

//   console.log("data is ==========>", params);

//   return (
//     <>
//       <h1>City: {location}</h1>
//       <h2>Service: {service}</h2>
//     </>
//   );
// };

// export default ServicePage;


export async function generateMetadata({ params }: PageProps) {
  const { location, service } = await params;

  const formattedService = service.replace(/---/g, " ").replace(/-/g, " ");
  const formattedLocation = location.replace(/-/g, " ");

  const title = `Top ${formattedService} in ${formattedLocation} - Best ${formattedService} near me - Justdial`;

  const description = `${formattedService} in ${formattedLocation} - Ensure your business stays cool with top-notch AC repairs and services. Beat the heat with quick, reliable solutions that minimize downtime. From installation to emergency repairs, find expert technicians.`;

  const keywords = `List of ${formattedService} in ${formattedLocation}, Reviews, Map, Address, Phone Number, Contact Number, popular ${formattedService}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `/${location}/${service}`,
      images: [
        "https://akam.cdn.jdmagicbox.com/images/icontent/jd-logo_nw.png"
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://akam.cdn.jdmagicbox.com/images/icontent/jd-logo_nw.png"],
    },
  };
}


const ServicePage = async ({ params }: PageProps) => {
  const { location, service } = await params;

  console.log("data is ==========>", params);

  return (
    <>
      <h1>City: {location}</h1>
      <h2>Service: {service}</h2>
    </>
  );
};

export default ServicePage;
