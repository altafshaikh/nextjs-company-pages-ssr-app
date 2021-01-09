import axios from "axios";

// components
import Layout from "../../components/Layout";
import Navbar from "../../components/contentstack/navbar";
import Banner from "../../components/contentstack/banner";
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
          logo: props.companyData.companyLogoBlack,
        }}
      >
        <header style={headerStyle}>
          <Navbar logo={props.companyData.companyLogowhite} />
          <Banner heroContent={props.companyData.heroContent} />
        </header>
        <h1>Contentstack</h1>
      </Layout>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
        `}
      </style>
    </div>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios(contentstackDataURI);

  return {
    props: { companyData: { ...data[0] } },
  };
};
