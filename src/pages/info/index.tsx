import * as React from "react";
import Header from "../../layout/Header";
import { SEO } from "../../components/seo";

const InfoPage = () => {
  return (
    <React.Fragment>
      <Header />
      <h2>Info</h2>
      <p>폰트테스트 : 가나다 깎다. ABC abc PARAGRAPH.</p>
    </React.Fragment>
  );
};

export default InfoPage;

export const Head = () => {
  return <SEO title={"Info"} />;
};
