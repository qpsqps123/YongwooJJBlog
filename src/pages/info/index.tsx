import * as React from "react";
import Header from "../../layout/Header";
import { SEO } from "../../components/seo";

const InfoPage = () => {
  return (
    <React.Fragment>
      <Header />
      <h2>Info</h2>
    </React.Fragment>
  );
};

export default InfoPage;

export const Head = () => {
  return <SEO title={"Info"} />;
};
