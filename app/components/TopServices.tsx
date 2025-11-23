"use client";
import { Container,Card, Col, Row } from "react-bootstrap";
import Image from "next/image";
import {topServices} from '../lib/data/topServices'

export default function TopServices() {
  return (
    <Container className="py-5">

      <h3 className="fw-semibold mb-4">Top Services Near You</h3>

      <Row className="g-4">
        {topServices.map((item, i) => (
          <Col key={i} md={12}>
            <Card className="shadow-sm border-0 p-3 d-flex flex-row align-items-center gap-3 hover-shadow">
              <Image src={item.image} alt={item.name} width={80} height={80} className="rounded" />

              <div>
                <h5 className="fw-bold m-0">{item.name}</h5>
                <p className="text-muted mb-1 small">{item.desc}</p>
                <p className="text-primary fw-semibold small m-0">
                  {item.status} · {item.rating} Rating
                </p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
     </Container>
  );
}
