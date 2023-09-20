import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./style.css";

export default function Header() {
  const [expand, setExpand] = useState(false);
  const handleExpand = (expand) => {
    setExpand(expand);
  };

  return (
    <header id="header" className="fixed-top">
      <Container>
        <Navbar
          expand="md"
          className="d-flex aling-items-center justify-content-between"
          onToggle={handleExpand}
          collapseOnSelect
        >
          <Navbar.Brand className="text-color">Mateo Herrera</Navbar.Brand>
          <Navbar.Toggle aria-controls="movile-nav" className="text-color">
            Menu
          </Navbar.Toggle>
          <Navbar.Collapse id="movile-nav" className="flex-grow-0">
            <Nav>
              <Nav.Item>
                <Nav.Link href='#home' style={{color: '#fff'}}>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#about' style={{color: '#fff'}}>About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#resume' style={{color: '#fff'}}>Resume</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#blog' style={{color: '#fff'}}>Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href='#contact' style={{color: '#fff'}}>Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
