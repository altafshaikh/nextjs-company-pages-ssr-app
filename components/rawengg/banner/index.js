import { Button } from "react-bootstrap";

// scss
import bannerStyles from "./index.module.scss";

export default function RawEnggBanner({ heroContent }) {
  return (
    <div style={{ height: "100vh" }} className="d-flex align-items-center">
      <div className="container text-dark d-flex justify-content-center">
        <div className="text-left col-sm-12">
          <h1 className={bannerStyles["hero-heading"]}>
            {heroContent.heading}
          </h1>
          <p className={bannerStyles["hero-content"]}>{heroContent.content}</p>
        </div>
      </div>
    </div>
  );
}
