import { Row, Col } from "react-bootstrap";
import footerStyle from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

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
              <Image
                src={logo}
                alt="contentstack footer logo"
                width={160}
                height={40}
              />
            </Col>
            <Col md={9}>
              <Row className="text-center">
                <Col md={3} className="d-flex flex-column">
                  <a
                    className={footerStyle["footer-column-links"]}
                    href="/#"
                    key={1}
                  >
                    Portfolio
                  </a>
                  <a
                    className={footerStyle["footer-column-links"]}
                    href="/#"
                    key={2}
                  >
                    Academy
                  </a>
                  <a
                    className={footerStyle["footer-column-links"]}
                    href="/#"
                    key={3}
                  >
                    Events
                  </a>
                </Col>
                <Col md={3} className="d-flex flex-column">
                  <a
                    className={footerStyle["footer-column-links"]}
                    href="/#"
                    key={4}
                  >
                    Gallery
                  </a>
                  <a
                    className={footerStyle["footer-column-links"]}
                    href="/#"
                    key={5}
                  >
                    e-certificates
                  </a>
                  <a
                    className={footerStyle["footer-column-links"]}
                    href="/#"
                    key={6}
                  >
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
