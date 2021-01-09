import Head from "next/head";

export default function Layout({
  children,
  title = "Home | Landing Page",
  Footer,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {children}

      <Footer />
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
        `}
      </style>
    </div>
  );
}
