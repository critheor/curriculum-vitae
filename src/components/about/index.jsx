import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ProfileSkillCard from "../profile-skills-card";
import AboutMeCard from "../about-me-card";
import "./style.css";

export default function About() {
  return (
    <section id="about" className="about-mf sect-pt4">
      <Container>
        <div className="box-shadow-full">
          <Row>
            <Col md={6}>
              <ProfileSkillCard />
            </Col>
            <Col md={6}>
              <AboutMeCard />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
