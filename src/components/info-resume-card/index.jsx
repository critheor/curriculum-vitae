import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./style.css";

export default function InfoResumeCard({ range, subtitle, description }) {
  return (
    <Card className="info-resume-card border-white mb-3">
      <Row>
        <Col sm={4}>
          <Card.Title className="fw-lighter fs-1">{range}</Card.Title>
        </Col>
        <Col sm={8}>
          <Card.Title className="fw-bold fs-0">{subtitle || "XGenCode"}</Card.Title>
          <Card.Text>
            {description || 'descripcion...'}
          </Card.Text>
        </Col>
      </Row>
    </Card>
  );
}
