// import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import footerStyle from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer({ socialLinks, logo }) {
  return (
    <>
      <footer>
        <div className="container">
          <Row className="text-center">
            <Col md={3}>
              <img src={logo} alt="contentstack footer logo" width="150" />
              <ul className="list-unstyled">
                {Object.keys(socialLinks).map((key) => {
                  return (
                    <>
                      <li className="list-inline-item">
                        <a href={socialLinks[key]}>
                          <FontAwesomeIcon
                            icon={["fab", `${key}`]}
                            className={footerStyle["socialLinks"]}
                          />
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </Col>
            <Col md={9}>
              <Row className="text-center">
                <Col md={3} className="d-flex flex-column text-left">
                  <h2 className={footerStyle["footer-column-heading"]}>
                    Product
                  </h2>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Features
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    For IT {`&`} Developers
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    For Business
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Integrations
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Pricing
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    ROI Calculator
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Customer Success
                  </a>
                </Col>
                <Col md={3} className="d-flex flex-column text-left">
                  <h2 className={footerStyle["footer-column-heading"]}>
                    Users
                  </h2>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Supported Platforms
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    FAQs
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Trust
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    System Status
                  </a>
                </Col>
                <Col md={3} className="d-flex flex-column text-left">
                  <h2 className={footerStyle["footer-column-heading"]}>
                    Education
                  </h2>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Customer Resources
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    CMS Guides
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Blog
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Docs
                  </a>
                </Col>
                <Col md={3} className="d-flex flex-column text-left">
                  <h2 className={footerStyle["footer-column-heading"]}>
                    Company
                  </h2>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    About
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    News
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Press
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Careers
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Become a Partner
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Contact Us
                  </a>
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
