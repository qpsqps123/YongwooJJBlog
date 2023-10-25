import * as React from "react";
import Header from "../../layout/Header";
import { SEO } from "../../components/seo";

const ProjectsPage = () => {
  return (
    <React.Fragment>
      <Header />
      <h2>Projects</h2>
    </React.Fragment>
  );
};

export default ProjectsPage;

export const Head = () => {
  return <SEO title={"Project"} />;
};
