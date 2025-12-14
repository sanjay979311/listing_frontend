"use client";

import { useState } from "react";
import { Container } from "react-bootstrap";
import { useRouter } from "next/navigation";
import LocationInput from "./LocationInput";
import ServiceInput from "./ServiceInput";

export default function SearchBlock() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const cleanSlug = (text) =>
    text.toLowerCase().trim().replace(/,/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

  const handleSearch = () => {
    if (!location || !service) return alert("Please select both location and service");

    let citySlug = "";
    let areaSlug = "";

    if (location.includes(",")) {
      const parts = location.split(",");
      areaSlug = cleanSlug(parts[0]);
      citySlug = cleanSlug(parts[1]);
    } else {
      citySlug = cleanSlug(location);
    }

    const serviceSlug = cleanSlug(service);
    const finalUrl = areaSlug
      ? `/${citySlug}/${serviceSlug}-in-${areaSlug}/`
      : `/${citySlug}/${serviceSlug}/`;

    router.push(finalUrl);
  };

  return (
    <Container className="my-4">
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <LocationInput location={location} setLocation={setLocation} />
        <ServiceInput service={service} setService={setService} onSearch={handleSearch} />
      </div>
    </Container>
  );
}
