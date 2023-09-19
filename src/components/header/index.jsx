import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

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
        >
          <Navbar.Brand>Mateo Herrera</Navbar.Brand>
          <Navbar.Toggle aria-controls="movile-nav">Menu</Navbar.Toggle>
          <Navbar.Collapse id="movile-nav" className="flex-grow-0">
            <Nav>
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Resume</Nav.Link>
              <Nav.Link>Blog</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
