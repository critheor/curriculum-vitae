import { Col, Container, Row } from "react-bootstrap";
import InfoResumeCard from "../info-resume-card";
import "./style.css";

export default function ResumeSection({ title, data }) {
  return (
    <Container className="resume-s-pt">
      <Row>
        <Col sm={4}>
          <h4 className="fs-title">{title || "Default Title"}</h4>
        </Col>
        <Col sm={8}>
          {data.map((item) => (
            <InfoResumeCard
              range={item.range}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}
