import * as React from "react";
import { SEO } from "../components/seo";
import Header from "../layout/Header";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <section>main section</section>
      </main>
    </React.Fragment>
  );
};

export default HomePage;

export const Head = () => <SEO title={"Home"} />;
