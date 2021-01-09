import axios from "axios";

// components
import Layout from "../../components/Layout";
import Navbar from "../../components/contentstack/navbar";
import Footer from "../../components/contentstack/footer";

// constants
import { contentstackDataURI } from "../../constants/endpoints";

export default function contentstack(props) {
  //   console.log(props.companyData);
  const headerStyle = {
    backgroundImage: `url(${props.companyData.bannerImages[0]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div>
      <Layout title="Contentstack" Footer={Footer}>
        <header style={headerStyle}>
          <Navbar logo={props.companyData.companyLogowhite} />
        </header>
        <h1>Contentstack</h1>
      </Layout>
    </div>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios(contentstackDataURI);

  return {
    props: { companyData: { ...data[0] } },
  };
};
