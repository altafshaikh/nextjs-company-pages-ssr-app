// components
import Layout from "../../components/Layout";
import contentstackNavbar from "../../components/contentstack/navbar";
import Footer from "../../components/contentstack/footer";

export default function contentstack() {
  return (
    <div>
      <Layout title="Contentstack" Navbar={contentstackNavbar} Footer={Footer}>
        <h1>Contentstack</h1>
      </Layout>
    </div>
  );
}
