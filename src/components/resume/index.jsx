import React from "react";
import { Container } from "react-bootstrap";
import ResumeSection from "../resume-section";
import dataResume from "../../store/info-resume.js";
import "./style.css";

export default function Resume() {
  return (
    <div id='resume' className="resume">
      <Container>
        <h3 className="title-r fw-bold">Resume</h3>
        {dataResume.map((item, index) => (
          <ResumeSection key={index} title={item.title} data={item.dataResume} />
        ))}
      </Container>
    </div>
  );
}
