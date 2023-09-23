import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Progress from "../progress";
import profileImg from "../../assets/profile-img.jpg";
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
            <span className="title-s">Name: </span>
            <span>Mateo Herrera</span>
          </Card.Text>
          <Card.Text>
            <span className="title-s">Profile: </span>
            <span>Web Developer</span>
          </Card.Text>
          <Card.Text>
            <span className="title-s">Email: </span>
            <span>mateoherreraramirez98@gmail.com</span>
          </Card.Text>
          <Card.Text>
            <span className="title-s">Phone: </span>
            <span>(+57) 3127287410</span>
          </Card.Text>
        </Col>
      </Row>
      <Row className="skills mt-4">
        <Col>
          <Card.Title className="mb-3">Skill</Card.Title>
          <Card.Text className="mb-0">
            <span>HTML5 </span>
            <span>75%</span>
          </Card.Text>
          <Progress value={"75%"} />
          <Card.Text className="mb-0 mt-3">
            <span>CSS3 </span>
            <span>65%</span>
          </Card.Text>
          <Progress value={"65%"} />
          <Card.Text className="mb-0 mt-3">
            <span>BOOTSTRAP </span>
            <span>60%</span>
          </Card.Text>
          <Progress value={"60%"} />
          <Card.Text className="mb-0 mt-3">
            <span>JAVASCRIPT </span>
            <span>70%</span>
          </Card.Text>
          <Progress value={"70%"} />
          <Card.Text className="mb-0 mt-3">
            <span>REACT JS </span>
            <span>75%</span>
          </Card.Text>
          <Progress value={"75%"} />

          <Card.Text className="mb-0 mt-3">
            <span>NODE JS </span>
            <span>65%</span>
          </Card.Text>
          <Progress value={"65%"} />

          <Card.Text className="mb-0 mt-3">
            <span>EXPRESS </span>
            <span>65%</span>
          </Card.Text>
          <Progress value={"65%"} />
          <Card.Text className="mb-0 mt-3">
            <span>POSTGRESQL </span>
            <span>50%</span>
          </Card.Text>
          <Progress value={"50%"} />
          <Card.Text className="mb-0 mt-3">
            <span>JAVA </span>
            <span>50%</span>
          </Card.Text>
          <Progress value={"70%"} />
          <div className="more-skill-link mt-3">
            <Card.Link href="#more-skills">More skills</Card.Link>
          </div>
        </Col>
      </Row>
    </Card>
  );
}
