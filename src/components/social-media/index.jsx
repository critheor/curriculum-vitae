import React from "react";
import { Col, Row } from "react-bootstrap";
import LinkedInLogo from "../../assets/icons/linkedin.svg";
import GitHubLogo from "../../assets/icons/github.svg";
import InstagramLogo from "../../assets/icons/instagram.svg";

export default function SocialMedia() {
  return (
    <Row>
      <Col className="col-2">
        <a href="https://github.com/critheor" target="_blank" rel="noreferrer">
          <img src={GitHubLogo} alt="GitHub Logo" />
        </a>
      </Col>
      <Col className="col-2">
        <a
          href="https://www.linkedin.com/in/cristian-mateo-herrera-ramirez-85b362269?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0THe2XVQSlS8DtArQnVggA%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedInLogo} alt="LinkedIn logo" />
        </a>
      </Col>
      <Col className="col-2">
        <a
          href="https://instagram.com/matiuzz_herrera?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noreferrer"
        >
          <img src={InstagramLogo} alt="Instagram logo" />
        </a>
      </Col>
    </Row>
  );
}
