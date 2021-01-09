// components
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout Navbar={Navbar} Footer={Footer}>
        <main className={styles.main}>
          <p>iNdex page</p>
        </main>
      </Layout>
    </div>
  );
}
