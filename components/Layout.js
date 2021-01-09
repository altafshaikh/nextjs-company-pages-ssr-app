import Head from "next/head";

export default function Layout({
  children,
  favicon = "../public/vercel.svg",
  title = "Home | Landing Page",
  Footer,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon} />
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
