import { Button } from "react-bootstrap";

// scss
import bannerStyles from "./index.module.scss";

export default function RawEnggBanner({ heroContent }) {
  return (
    <div style={{ height: "100vh" }} className="d-flex align-items-center">
      <div className="container text-white d-flex justify-content-center w-75">
        <div className="text-center col-sm-12">
          <h1 className={bannerStyles["hero-heading"]}>
            {heroContent.heading}
          </h1>
          <p className={bannerStyles["hero-content"]}>{heroContent.content}</p>
        </div>
      </div>
    </div>
  );
}
