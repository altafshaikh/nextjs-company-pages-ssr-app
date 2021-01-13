import axios from "axios";

// components
import Layout from "../../components/Layout";
import Footer from "../../components/Footer/";

// constants
import { surfboardDataURI } from "../../constants/endpoints";

export default function surfboard() {
  const headerStyle = {
    backgroundImage: `url(${props.companyData.bannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };
  return (
    <div>
      <Layout
        title="Contentstack | Home"
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
      <h1>Surfboard</h1>
    </div>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios(surfboardDataURI);

  return {
    props: { companyData: { ...data[0] } },
  };
};
