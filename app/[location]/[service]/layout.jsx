import { notFound } from "next/navigation";

// This layout wraps your dynamic service page
export async function generateMetadata({ params }) {
    console.log("params is ========>",params)
  // Decode slugs
  const location = decodeURIComponent(
    Array.isArray(params.location) ? params.location[0] : params.location
  );
  const service = decodeURIComponent(
    Array.isArray(params.service) ? params.service[0] : params.service
  );
  const serviceTitle = service?.replace(/-/g, " ") || "";

  if (!location || !service) return notFound();

  return {
    title: `${serviceTitle} in ${location} | FindServices`,
    description: `Find top ${serviceTitle} services in ${location}. Browse verified listings, ratings, and details for trusted service providers.`,
  };
}

// Default layout component
export default function ServiceLayout({ children }) {
  return (
    <div>
      {/* You can add header/footer here to wrap all pages */}
      {children}
    </div>
  );
}
