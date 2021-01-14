import { Navbar, Nav, Button } from "react-bootstrap";
import navStyles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";

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
          <Image
            src={logo}
            alt="rawengg company logo"
            width={180}
            height={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="px-2">
          <Nav
            className={["ml-auto px-5"].join(" ")}
            style={{ fontSize: "12px" }}
          >
            <Link href="/">
              <a className={["nav-link", navStyles["nav-links"]].join(" ")}>
                Home
              </a>
            </Link>
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
              variant="primary"
              className={["px-4 ml-3", navStyles["contact-btn"]].join(" ")}
            >
              Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
