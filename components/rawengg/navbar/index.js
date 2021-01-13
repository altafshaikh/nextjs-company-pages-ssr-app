import { Navbar, Nav, Button } from "react-bootstrap";
import navStyles from "./index.module.scss";

export default function RawEnggNavbar({ logo }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="px-5"
      >
        <Navbar.Brand href="#rawengg" className="pl-5">
          <img src={logo} alt="rawengg company logo" width="180" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="px-2">
          <Nav className="ml-auto px-5" style={{ fontSize: "12px" }}>
            <Nav.Link href="/" className="text-white text-capitalize">
              HOME
            </Nav.Link>
            <Nav.Link href="#what-we-do" className="text-white text-capitalize">
              WHAT WE DO
            </Nav.Link>
            <Nav.Link href="#our-work" className="text-white">
              OUR WORK
            </Nav.Link>
            <Nav.Link href="#who-we-are" className="text-white">
              WHO WE ARE
            </Nav.Link>
            <Nav.Link href="#blog" className="text-white">
              BLOG
            </Nav.Link>
            <Nav.Link href="#careers" className="text-white">
              CAREERS
            </Nav.Link>

            <Button
              className="px-4 ml-3"
              variant="primary"
              style={{
                backgroundColor: "#0069d9",
                outline: "none",
                borderColor: "#0069d9",
                letterSpacing: "1.1px",
                borderRadius: "25px",
                minWidth: "150px",
              }}
            >
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
