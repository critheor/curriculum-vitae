import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import ListIcon from "../../assets/icons/list.svg";
import CloseIcon from "../../assets/icons/close.svg";
import "./style.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header
      id="header"
      className={`fixed-top header-scrolled ${open ? "ex-h" : ""}`}
    >
      <Container>
        <Navbar
          expand="md"
          className="d-flex aling-items-center justify-content-between"
          collapseOnSelect
        >
          <Navbar.Brand style={{ color: "#fff" }}>Mateo Herrera</Navbar.Brand>
          <Navbar.Toggle aria-controls="movile-nav" className="text-color">
            <Button className="bg-transparent border-0" onClick={handleClick}>
              <img
                className="bg-img"
                src={open ? CloseIcon : ListIcon}
                alt="heading list icon"
              />
            </Button>
          </Navbar.Toggle>
          <Navbar.Collapse id="movile-nav" className="flex-grow-0">
            <Nav onSelect={(_) => setOpen(!open)}>
              <Nav.Item>
                <Nav.Link  href="#hero" style={{ color: "#fff" }}>
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#about" style={{ color: "#fff" }}>
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#resume" style={{ color: "#fff" }}>
                  Resume
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#projects" style={{ color: "#fff" }}>
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact" style={{ color: "#fff" }}>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}
