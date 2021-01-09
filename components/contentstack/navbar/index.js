import { Navbar, Nav, Button } from "react-bootstrap";
import navStyles from "./index.module.scss";

export default function contentstackNavbar({ logo }) {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="mx-5 pt-3">
        <Navbar.Brand href="#contentstack">
          <img src={logo} alt="contentstack company logo" width="200" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="px-2">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#Product" className="text-white">
              Product
            </Nav.Link>
            <Nav.Link href="#Education" className="text-white">
              Education
            </Nav.Link>
            <Nav.Link href="#Partners" className="text-white">
              Partners
            </Nav.Link>
            <Nav.Link href="#Company" className="text-white">
              Company
            </Nav.Link>
            <Nav.Link href="#Pricing" className="text-white">
              Pricing
            </Nav.Link>
            <Button
              className="px-3"
              variant="primary"
              style={{
                backgroundColor: "#eb5646",
                outline: "none",
                border: "none",
              }}
            >
              Try For Free
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
