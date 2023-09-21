import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./style.css";

export default function InfoResumeCard({ range, role, description }) {
  return (
    <Card className="border-white mb-3">
      <Row>
        <Col sm={4}>
          <Card.Title className="fw-lighter fs-0">{range || "2023 - actual"}</Card.Title>
        </Col>
        <Col sm={8}>
          <Card.Title className="fw-bold fs-0">{role || "XGenCode"}</Card.Title>
          <Card.Text>
            {description || 'descripcion...'}
          </Card.Text>
        </Col>
      </Row>
    </Card>
  );
}
