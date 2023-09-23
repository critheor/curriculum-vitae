import { Col, Container, Row } from "react-bootstrap";
import InfoResumeCard from "../info-resume-card";
import "./style.css";

export default function ResumeSection({ title, data }) {
  return (
    <Container className="resume-s-pt of-scroll mb-4">
      <Row>
        <Col sm={6} className="mb-4">
          <h4 className="fs-title">{title || "Default Title"}</h4>
        </Col>
        <Col sm={6}>
          {data.map((item, index) => (
            <InfoResumeCard
              key={index}
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
