import React from "react";
import { Container } from "react-bootstrap";
import Background from "../../assets/hero-bg.jpg";
import "./style.css";

export default function Hero() {
  return (
    <div
      id="hero"
      className="hero bg-image"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <Container>
            <h1 className="hero-title mb-4">yo soy MATEO HERRERA</h1>
            <p className="hero-subtitle">
              Desarrollador Web
            </p>
          </Container>
        </div>
      </div>
    </div>
  );
}
