import React from "react";
import Header from "@/components/header/Header";
import { SEO } from "@/components/seo";
import * as classes from "@/styles/templates/EmptyPost.module.scss";
import Footer from "@/components/footer/Footer";

const EmptyPost = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.mainContainer}>
        <p className={classes.description}>No post yet...!</p>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default EmptyPost;

export const Head = () => {
  return <SEO title={"Blog"} />;
};
