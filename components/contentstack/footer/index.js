import Link from "next/link";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <Row>
            <Col sm={3}></Col>
            <Col sm={9}>
              <Row>
                <Col sm={3}></Col>
                <Col sm={3}></Col>
                <Col sm={3}></Col>
                <Col sm={3}></Col>
              </Row>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}
