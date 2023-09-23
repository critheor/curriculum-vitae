import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

export default function AboutMeCard() {
  return (
    <Card className="about-me-card border-white">
      <Card.Body className="p-0 pt-4 pb-1">
        <Card.Title className="fw-bold fs-am">Sobre Mí</Card.Title>
        <Card.Text>
          Soy Mateo Herrera Ramírez, un apasionado Desarrollador Web enfocado en
          la creación de soluciones web innovadoras y atractivas. Mi enfoque se
          centra en la combinación de diseño creativo y desarrollo técnico para
          ofrecer experiencias digitales excepcionales. Con un compromiso
          constante con la mejora y la búsqueda de soluciones eficientes, estoy
          decidido a impulsar el éxito en el mundo digital. <br></br>
          <br></br>
          Mi objetivo profesional es seguir avanzando en mi carrera como
          Desarrollador Web, desafiándome constantemente para adquirir nuevas
          habilidades y conocimientos en el campo de la tecnología web. Aspiro a
          liderar proyectos innovadores y contribuir al desarrollo de soluciones
          digitales de vanguardia que mejoren la experiencia del usuario y
          generen un impacto positivo en el mundo virtual. Mi visión a largo
          plazo es convertirme en un experto en desarrollo web y seguir siendo
          un jugador clave en la evolución del diseño y la funcionalidad en
          línea.
          <br></br>
          <br></br>
          Mi mayor fortaleza es buscar constantemente la solución más óptima
          para desafíos técnicos. Mi pasión por resolver problemas de software
          me impulsa a abordar cada proyecto con creatividad y determinación. Me
          enorgullece seguir rigurosos patrones de desarrollo y estándares de la
          industria para garantizar la robustez y la eficiencia de las
          aplicaciones que creo
          <Card.Link href="https://www.linkedin.com/in/cristian-mateo-herrera-ramirez-85b362269/">
            more...
          </Card.Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
