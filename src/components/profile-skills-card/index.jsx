import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Progress from "../progress";
import profileImg from "../../assets/profile-img.jpg";
import skills from "../../store/info-skills";
import "./style.css";

export default function ProfileSkillCard() {
  return (
    <Card className="border-white">
      <Row className="profile">
        <Col sm={6}>
          <Col className="col-6">
            <Card.Img variant="top" src={profileImg} />
          </Col>
        </Col>
        <Col sm={6} className="about-info mt-3">
          <Card.Text>
            <span className="title-s">Nombre: </span>
            <span>Mateo Herrera</span>
          </Card.Text>
          <Card.Text>
            <span className="title-s">Perfil: </span>
            <span>Desarrollador Web</span>
          </Card.Text>
          <Card.Text>
            <span className="title-s">Correo: </span>
            <span>
              <a
                href="mailto:mateoherreraramirez98@gmail.com"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                mateoherreraramirez98@gmail.com
              </a>
            </span>
          </Card.Text>
          <Card.Text>
            <span className="title-s">Telefono: </span>
            <span>
              <a
                href="tel:+573127287410"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                (+57) 3127287410
              </a>
            </span>
          </Card.Text>
        </Col>
      </Row>
      <Row className="skills mt-4">
        <Card.Title className="mb-3 fs-sk fw-bold">Skill</Card.Title>
        <Col>
          {skills.map((item, index) => {
            return (
              <div key={index}>
                <Card.Text className="mb-0 mt-3">
                  <span>{item.skill} </span>
                  <span>{item.progress}</span>
                </Card.Text>
                <Progress value={item.progress} />
              </div>
            );
          })}
          <div className="more-skill-link mt-3">
            <Card.Link href="https://www.linkedin.com/in/cristian-mateo-herrera-ramirez-85b362269/">
              More skills
            </Card.Link>
          </div>
        </Col>
      </Row>
    </Card>
  );
}