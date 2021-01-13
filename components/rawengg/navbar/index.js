import { Navbar, Nav, Button } from "react-bootstrap";
import navStyles from "./index.module.scss";

export default function RawEnggNavbar({ logo }) {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="px-5"
        style={{ backgroundColor: "black" }}
      >
        <Navbar.Brand href="#rawengg" className="pl-5">
          <img src={logo} alt="rawengg company logo" width="180" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="px-2">
          <Nav
            className={["ml-auto px-5"].join(" ")}
            style={{ fontSize: "12px" }}
          >
            <Nav.Link href="/" className={navStyles["nav-links"]}>
              HOME
            </Nav.Link>
            <Nav.Link href="#what-we-do" className={navStyles["nav-links"]}>
              WHAT WE DO
            </Nav.Link>
            <Nav.Link href="#our-work" className={navStyles["nav-links"]}>
              OUR WORK
            </Nav.Link>
            <Nav.Link href="#who-we-are" className={navStyles["nav-links"]}>
              WHO WE ARE
            </Nav.Link>
            <Nav.Link href="#blog" className={navStyles["nav-links"]}>
              BLOG
            </Nav.Link>
            <Nav.Link href="#careers" className={navStyles["nav-links"]}>
              CAREERS
            </Nav.Link>

            <Button
              className="px-4 ml-3"
              variant="primary"
              className={navStyles["contact-btn"]}
            >
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
