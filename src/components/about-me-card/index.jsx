import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

export default function AboutMeCard() {
  return (
    <Card className="about-me-card border-white">
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          Soy Mateo Herrera Ramírez, un apasionado Web Developer con experiencia
          en la creación de soluciones web innovadoras y atractivas. Mi enfoque
          se centra en la combinación de diseño creativo y desarrollo técnico
          para ofrecer experiencias digitales excepcionales. Con un compromiso
          constante con la mejora y la búsqueda de soluciones eficientes, estoy
          decidido a impulsar el éxito en el mundo digital
          <Card.Link href="#more-about-me">more...</Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
