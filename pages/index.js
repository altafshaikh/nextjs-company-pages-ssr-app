import Head from "next/head";

// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page | Home</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href="vercel.svg" />
      </Head>
      <main></main>
      <style jsx>
        {`
          main {
            background-image: linear-gradient(
                rgba(0, 0, 0, 0.3),
                rgba(0, 0, 0, 0.3)
              ),
              url(https://image.freepik.com/free-photo/shot-sun-eye-metropolis-urban_1112-964.jpg);
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
