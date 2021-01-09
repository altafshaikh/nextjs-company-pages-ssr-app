import Head from "next/head";

export default function Layout({
  children,
  title = "Home | Landing Page",
  Navbar,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar />
      </header>

      {children}

      <footer>{"Footer"}</footer>
    </div>
  );
}
