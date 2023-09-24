import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../social-media";
import "./style.css";

export default function Footer() {
  return (
    <footer id="contact" className="mb-4 pt-3 bt">
      <Container>
        <Container>
          <h3 className="contact-title-r fw-bold">Contact</h3>
          <Row>
            <Col sm={3} className="mb-3">
              <p>
                <span className="title fw-bold">Telefono</span>
                <span className="info">
                  <a
                    href="tel:+573127287410"
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    (+57) 3127287410
                  </a>
                </span>
              </p>
            </Col>
            <Col sm={6} className="mb-3">
              <p>
                <span className="title fw-bold">Correo</span>
                <span className="info">
                  <a
                    href="mailto:mateoherreraramirez98@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    mateoherreraramirez98@gmail.com
                  </a>
                </span>
              </p>
            </Col>
            <Col sm={3} className="mb-3">
              <span className="title fw-bold">Visiteme</span>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
}
