import React from "react";
import Header from "@/components/header/Header";
import { SEO } from "@/components/seo";
import * as classes from "@/styles/templates/EmptyPost.module.scss";
import Footer from "@/components/footer/Footer";
import Layout from "@/components/layout";

const EmptyPost = () => {
  return (
    <Layout>
      <Header />
      <main className={classes.mainContainer}>
        <p className={classes.description}>No post yet...!</p>
      </main>
      <Footer />
    </Layout>
  );
};

export default EmptyPost;

export const Head = () => {
  return <SEO title={"Blog"} />;
};
