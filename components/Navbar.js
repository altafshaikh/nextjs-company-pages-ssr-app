import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |
        <Link href="/companies/contentstack">
          <a>CS</a>
        </Link>{" "}
        |
        <Link href="/companies/rawengg">
          <a>Raw Engineering</a>
        </Link>
        <Link href="/companies/surfboard">
          <a>Surfboard</a>
        </Link>
      </nav>
    </>
  );
}
