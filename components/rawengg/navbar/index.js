import { Navbar, Nav, Button } from "react-bootstrap";
import navStyles from "./index.module.scss";

export default function RawEnggNavbar({ logo }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="mx-5 pt-3"
      >
        <Navbar.Brand href="#contentstack">
          <img src={logo} alt="contentstack company logo" width="200" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="px-2">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="text-dark">
              Home
            </Nav.Link>
            <Nav.Link href="#Portfolio" className="text-dark">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#Academy" className="text-dark">
              Academy
            </Nav.Link>
            <Nav.Link href="#Events" className="text-dark">
              Events
            </Nav.Link>
            <Nav.Link href="#Gallery" className="text-dark">
              Gallery
            </Nav.Link>

            <Button
              className="px-4 ml-3"
              variant="primary"
              style={{
                backgroundColor: "#28C8DC",
                outline: "none",
                border: "none",
                letterSpacing: "1.1px",
                borderRadius: "25px",
                minWidth: "150px",
              }}
            >
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
