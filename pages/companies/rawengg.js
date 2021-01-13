import axios from "axios";

// components
import Layout from "../../components/Layout";

// constants
import { rawenggDataURI } from "../../constants/endpoints";

export default function rawengg() {
  return (
    <div>
      <h1>Raw Enginnering</h1>
    </div>
  );
}

export const getStaticProps = async (context) => {
  let { data } = await axios(surfboardDataURI);

  return {
    props: { companyData: { ...data[0] } },
  };
};
