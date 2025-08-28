import React, { useEffect } from "react";
import { navigate } from "gatsby";
import { SEO } from "@/components/seo";
import Header from "@/components/header/Header";
import Layout from "@/components/layout";

const HomePage = () => {
  useEffect(() => {
    navigate("/info");
  }, []);

  return (
    <Layout>
      <Header />
      <main>
        <p>redirecting...</p>
      </main>
    </Layout>
  );
};

export default HomePage;

export const Head = () => <SEO title={"Home"} />;
