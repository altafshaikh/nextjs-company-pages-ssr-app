import { Button } from "react-bootstrap";

// scss
import bannerStyles from "./index.module.scss";

export default function Banner({ heroContent }) {
  return (
    <div style={{ height: "100vh" }} className="d-flex align-items-center">
      <div className="container text-white d-flex justify-content-center">
        <div className="text-center col-sm-12">
          <h1 className={bannerStyles["hero-heading"]}>
            {heroContent.heading}
          </h1>
          <p className={bannerStyles["hero-content"]}>{heroContent.content}</p>
          <Button
            className="px-5 my-5"
            variant="primary"
            style={{
              backgroundColor: "#eb5646",
              outline: "none",
              border: "none",
              letterSpacing: "1.1px",
            }}
          >
            Try For Free
          </Button>
          <p
            style={{
              color: "#eb5646",
            }}
          >
            Request A Demo
          </p>
        </div>
      </div>
    </div>
  );
}
