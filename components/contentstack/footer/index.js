import Link from "next/link";
import { Row, Col } from "react-bootstrap";

export default function Footer({ socialLinks, logo }) {
  return (
    <>
      <footer>
        <div className="container">
          <Row className="text-center">
            <Col md={3}>
              <img src={logo} alt="contentstack footer logo" width="150" />
            </Col>
            <Col md={9}>
              <Row className="text-center">
                <Col md={3} className="d-flex flex-column">
                  <h2>Product</h2>
                  <a href="/#">Features</a>
                  <a href="/#">For IT {`&`} Developers</a>
                  <a href="/#">For Business</a>
                  <a href="/#">Integrations</a>
                  <a href="/#">Pricing</a>
                  <a href="/#">ROI Calculator</a>
                  <a href="/#">Customer Success</a>
                </Col>
                <Col md={3} className="d-flex flex-column">
                  <h2>Users</h2>
                  <a href="/#">Supported Platforms</a>
                  <a href="/#">FAQs</a>
                  <a href="/#">Trust</a>
                  <a href="/#">System Status</a>
                </Col>
                <Col md={3} className="d-flex flex-column">
                  <h2>Education</h2>
                  <a href="/#">Customer Resources</a>
                  <a href="/#">CMS Guides</a>
                  <a href="/#">Blog</a>
                  <a href="/#">Docs</a>
                </Col>
                <Col md={3} className="d-flex flex-column">
                  <h2>Company</h2>
                  <a href="/#">About</a>
                  <a href="/#">News</a>
                  <a href="/#">Press</a>
                  <a href="/#">Careers</a>
                  <a href="/#">Become a Partner</a>
                  <a href="/#">Contact Us</a>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr
            className="font-weight-bold my-5"
            style={{ background: "black" }}
          />
          <Row className="text-right">
            <Col>
              <ul className="list-unstyled list-inline pb-5">
                <li className="list-inline-item">Terms</li>
                <li className="list-inline-item">Privacy</li>
              </ul>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}
