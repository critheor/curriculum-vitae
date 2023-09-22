import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../social-media";
import "./style.css";

export default function Footer() {
  return (
    <footer className="mb-4 pt-3 bt">
      <Container>
        <Row>
          <Col sm={3} className="mb-3">
            <p>
              <span className="title fw-bold">Phone</span>
              <span className="info">
                <a
                  href="tel:+573127287410"
                  rel="noreferrer"
                  target="_blank"
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                (+57) 3127287410
                </a>
              </span>
            </p>
          </Col>
          <Col sm={6} className="mb-3">
            <p>
              <span className="title fw-bold">Email</span>
              <span className="info">
                <a
                  href="mailto:mateoherreraramirez98@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{textDecoration: 'none', color: 'inherit'}}
                >
                  mateoherreraramirez98@gmail.com
                </a>
              </span>
            </p>
          </Col>
          <Col sm={3} className="mb-3">
            <p>
              <span className="title fw-bold">Visit Me</span>
              <SocialMedia />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
