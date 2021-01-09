import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout title="Index Page" Navbar={Navbar}>
        <main className={styles.main}>
          <p>iNdex page</p>
        </main>
      </Layout>
    </div>
  );
}
