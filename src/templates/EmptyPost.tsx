import React from "react";
import Header from "../layout/Header";
import { SEO } from "../components/seo";
import * as classes from "../styles/templates/EmptyPost.module.scss";

const EmptyPost = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.mainContainer}>
        <p className={classes.description}>No Post Yet...!</p>
      </main>
      <footer className={classes.footerContainer}></footer>
    </React.Fragment>
  );
};

export default EmptyPost;

export const Head = () => {
  return <SEO title={"Blog"} />;
};
