import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { SEO } from "@/components/seo";
import Header from "@/components/header/Header";

const HomePage = () => {
  useEffect(() => {
    navigate("/info");
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main>
        <p>redirecting...</p>
      </main>
    </React.Fragment>
  );
};

export default HomePage;

export const Head = () => <SEO title={"Home"} />;
