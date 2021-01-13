import axios from "axios";

// components
import Layout from "../../components/Layout";
import Navbar from "../../components/surfboard/navbar";
import Banner from "../../components/surfboard/banner";
import Footer from "../../components/surfboard/footer";

// constants
import { surfboardDataURI } from "../../constants/endpoints";

export default function surfboard(props) {
  const headerStyle = {
    backgroundImage: `url(${props.companyData.bannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <>
      <Layout
        title="Surfboard Ventures | Home"
        Footer={Footer}
        favicon={props.companyData.favicon}
        footerContent={{
          socialLinks: props.companyData.socialLinks,
          logo: props.companyData.companyLogo,
        }}
      >
        <header style={headerStyle}>
          <Navbar logo={props.companyData.companyLogo} />
          <Banner heroContent={props.companyData.heroContent} />
        </header>
      </Layout>
    </>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios(surfboardDataURI);

  return {
    props: { companyData: { ...data[0] } },
  };
};
