import { Navbar, Nav, Button } from "react-bootstrap";
import navStyles from "./index.module.scss";

export default function SurfboardNavbar({ logo }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className="mx-5 pt-3"
      >
        <Navbar.Brand href="#surfboard">
          <img src={logo} alt="surfboard company logo" width="200" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="px-2">
          <Nav className="ml-auto">
            <Nav.Link href="/" className={navStyles["nav-links"]}>
              Home
            </Nav.Link>
            <Nav.Link href="#Portfolio" className={navStyles["nav-links"]}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="#Academy" className={navStyles["nav-links"]}>
              Academy
            </Nav.Link>
            <Nav.Link href="#Events" className={navStyles["nav-links"]}>
              Events
            </Nav.Link>
            <Nav.Link href="#Gallery" className={navStyles["nav-links"]}>
              Gallery
            </Nav.Link>

            <Button
              variant="primary"
              className={["px-4 ml-3", navStyles["contact-btn"]].join(" ")}
            >
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
