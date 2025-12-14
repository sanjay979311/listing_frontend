"use client";
import {Container, Card, Col, Row } from "react-bootstrap";
import * as Icons from "react-icons/fa";
import {categories} from '../lib/data/categories'

export default function PopularCategories() {
  return (
    <Container className="py-5">

   
    
      <h3 className="fw-semibold mb-4">Popular Categories</h3>

      <Row className="g-4">
        {categories.map((cat) => {
         const Icon = (Icons as any)[cat.icon];
          return (
            <Col key={cat.name} xs={6} sm={4} md={3} lg={2}>
              <Card className="shadow-sm border-0 text-center p-4 hover-shadow">
                <div className="text-primary mb-2">
                  <Icon size={30} />
                </div>
                <Card.Text className="fw-medium small">{cat.name}</Card.Text>
              </Card>
            </Col>
          );
        })}
      </Row>
   
     </Container>
  );
}
