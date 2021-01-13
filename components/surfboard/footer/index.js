// import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import footerStyle from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer({ socialLinks, logo }) {
  return (
    <>
      <footer
        style={{
          borderTop: "#DFE1E5",
          borderTopStyle: "solid",
          borderTopWidth: "1px",
        }}
      >
        <div
          className="container mt-5"
          style={{
            paddingLeft: "0",
            paddingRight: "0",
          }}
        >
          <Row className="text-center">
            <Col md={3}>
              <img src={logo} alt="contentstack footer logo" width="160" />
            </Col>
            <Col md={9}>
              <Row className="text-center">
                <Col md={3} className="d-flex flex-column">
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Portfolio
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Academy
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Events
                  </a>
                </Col>
                <Col md={3} className="d-flex flex-column">
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Gallery
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    e-certificates
                  </a>
                  <a className={footerStyle["footer-column-links"]} href="/#">
                    Contact Us
                  </a>
                </Col>
                <Col md={3} className="d-flex flex-column">
                  <a
                    className={footerStyle["footer-column-links"]}
                    href="mailto:info@surfboardventures.com?subject=Enquiry"
                    target="_blank"
                  >
                    info@surfboardventures.com
                  </a>
                </Col>
                <Col md={3} className="d-flex flex-column">
                  <ul className="list-unstyled">
                    {Object.keys(socialLinks).map((key, index) => {
                      return (
                        <>
                          <li className="list-inline-item" key={index}>
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
              </Row>
            </Col>
          </Row>
          <hr className="mt-5" />
          <Row>
            <Col>
              <p className={footerStyle["footer-copyright"]}>
                Copyright © 2020 Surfboard Ventures. All Rights Reserved.
              </p>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}
