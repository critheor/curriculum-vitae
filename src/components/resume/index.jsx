import React from "react";
import { Container } from "react-bootstrap";
import ResumeSection from "../resume-section";
import "./style.css";

export default function Resume() {
  return (
    <div className="resume">
      <Container>
        <h3 className="title-r fw-bold">
          Resume
        </h3>
        <ResumeSection title={'Example'}/>
      </Container>
    </div>
  );
}
