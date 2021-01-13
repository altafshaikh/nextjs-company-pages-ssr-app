import axios from "axios";

// components
import Layout from "../../components/Layout";
import Navbar from "../../components/rawengg/navbar";
import Banner from "../../components/rawengg/banner";
import Footer from "../../components/rawengg/footer";

// constants
import { rawenggDataURI } from "../../constants/endpoints";

export default function rawengg(props) {
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
        title="Raw Engineering| Home"
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
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
        `}
      </style>
    </>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios(rawenggDataURI);

  return {
    props: { companyData: { ...data[0] } },
  };
};
