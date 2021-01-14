import Head from "next/head";
import axios from "axios";

// data
import { homeDataURI } from "../constants/endpoints";

// styles
import styles from "../styles/Home.module.css";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Landing Page | Home</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href="vercel.svg" />
      </Head>
      <main>
        <div style={{ height: "100vh" }} className="d-flex align-items-center">
          <div className="container text-white d-flex justify-content-center">
            <div className="col-sm text-center d-flex-column w-100">
              {props.landingData.companies.map((company) => {
                return (
                  <>
                    <a href={company.url}>
                      <img
                        className={
                          company.companyName === "contentstack"
                            ? styles["image-style"]
                            : ""
                        }
                        src={company.logo}
                        width="70"
                        height="70"
                      />
                    </a>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <style jsx>
        {`
          main {
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.3)
              ),
              url(${props.landingData.backgroundImage});
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            width: 100%;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios(homeDataURI);

  return {
    props: { landingData: { ...data[0] } },
  };
};
