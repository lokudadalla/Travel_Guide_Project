import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { FiSearch } from "react-icons/fi";
import Navbar3 from "./Navbar";

function SidebarNavbar() {
  return (
    <Navbar
      expand="lg"
      className="position-absolute w-100 py-3"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.0)", // Semi-transparent background
        zIndex: 10,
      }}
    >
      <Container fluid className="align-items-center">
        {/* Left Section - Logo */}
        <Navbar.Brand href="#" className="d-flex align-items-center">
        </Navbar.Brand>


        

        {/* Center Section - Navigation Links */}
        <Navbar.Toggle aria-controls="navbarScroll" className="text-white border-0">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto d-flex justify-content-start">
            <Nav.Link
            href="#Home"
            className="px-4 text-white font-bold text-lg"
            >
            <h5>Home</h5>
            </Nav.Link>
            <Nav.Link
            href="#destinations"
            className="px-4 text-white font-bold text-lg"
            >
            <h5>Destinations</h5>
            </Nav.Link>
            <Nav.Link
            href="#ChatBot"
            className="px-4 text-white font-bold text-lg"
            >
            <h5>ChatBot</h5>
            </Nav.Link>
            <Nav.Link
            href="#Reservations"
            className="px-4 text-white font-bold text-lg"
            >
            <h5>Reservations</h5>
            </Nav.Link>
            <Nav.Link
            href="#ContantUs"
            className="px-4 text-white font-bold text-lg"
            >
            <h5>ContantUs</h5>
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>



        {/* Right Section - Search and Icons */}
        <div className="d-flex align-items-center">
          {/* Search Input */}
          <Form className="d-flex me-3">
            <div className="d-flex align-items-center bg-light rounded-pill px-3 border">
              <FiSearch className="me-2 text-muted" />
              <Form.Control
                type="search"
                placeholder="Search"
                className="border-0 bg-light"
                style={{ width: "170px" }}
              />
            </div>
          </Form>

          {/* Icons */}
          
        </div>
      </Container>
    </Navbar>
  );
}

export default SidebarNavbar;
