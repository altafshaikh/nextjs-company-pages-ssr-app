// import Link from "next/link";
import { Row, Col, Button } from "react-bootstrap";
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
          background: "black",
        }}
      >
        <Row>
          <div className="container text-center p-5">
            <h2 className="text-white">
              Ready to get started on your next project?
            </h2>
            <Button
              className={["px-4 mt-5", footerStyle["touch-btn"]].join(" ")}
              variant="primary"
            >
              GET IN TOUCH
            </Button>
          </div>
        </Row>
        <Row className={footerStyle["row2-container"]}>
          <div className="container pb-5">
            <ul className={footerStyle["socialLink-container"]}>
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
            <ul className="list-unstyled">
              <li className="list-inline-item">
                <a className={footerStyle["footer-copyright"]} href="#">
                  Privacy
                </a>
              </li>
              <li className="list-inline-item">
                <a className={footerStyle["footer-copyright"]} href="#">
                  Backend Terms of Use
                </a>
              </li>
            </ul>
            <p className="text-white">
              Copyright © 2021 Raw Engineering LLC. All Rights Reserved.
            </p>
            <img
              src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/blt67d1684f23bec105/5e31575101e4f445b22f4bde/soc_logo.png?width=100"
              width="75"
              height="75"
            />
          </div>
        </Row>
      </footer>
    </>
  );
}
