import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function Try() {
  return (
    <>
      <Row>
        <div className="container py-3" style={{ maxWidth: "100%" }}>
          <div
            style={{
              backgroundImage:
                "url(https://images.contentstack.io/v3/assets/bltc5a09bf374882538/blta8ec620b53524f45/5f1a2bd31db8ad781814787d/download.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "100%",
            }}
          >
            <div className="container text-white d-flex justify-content-center">
              <div className="text-center col-sm-12">
                <h1
                  className="mt-5"
                  style={{ fontWeight: "bold" }}
                >{`TRY IT TO BELIEVE IT`}</h1>

                <Button
                  className="ml-3 px-5 my-5"
                  variant="primary"
                  style={{
                    backgroundColor: "#eb5646",
                    outline: "none",
                    border: "none",
                    letterSpacing: "1.1px",
                    fontWeight: "bold",
                  }}
                >
                  Request A Demo
                </Button>
                <Button
                  className="ml-3 px-5 my-5"
                  variant="primary"
                  style={{
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "#eb5646",
                    backgroundColor: "transparent",
                    outline: "none",
                    letterSpacing: "1.1px",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "#eb5646 !important",
                      color: "black",
                    },
                  }}
                >
                  Try For Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
}
