import { Navbar, Nav } from "react-bootstrap";

export default function contentstackNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="#contentstack">Contentstack</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#Product">Product</Nav.Link>
            <Nav.Link href="#Education">Education</Nav.Link>
            <Nav.Link href="#Partners">Partners</Nav.Link>
            <Nav.Link href="#Company">Company</Nav.Link>
            <Nav.Link href="#Pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
