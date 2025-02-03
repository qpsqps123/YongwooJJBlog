import React from "react";
import * as classes from "./Project.module.scss";
import { IProjectProps } from "@/types/components/project/project";
import { StaticImage } from "gatsby-plugin-image";

const Project = ({ deployHrefSrc, deployLinkLabel, imgSrc, imgAlt, role, workType, title, githubHrefSrc, githubLinkLabel, description, techStack }: IProjectProps) => {
  return (
    <article className={classes.projectContainer}>
      <div className={classes.thumbnailContainer}>
        <a href={deployHrefSrc} target="_blank" rel="noopener noreferrer" aria-label={deployLinkLabel}>
          <img src={imgSrc} alt={imgAlt} loading="lazy" />
        </a>
      </div>
      <ul className={classes.roleAndWorkType}>
        <li>
          <ul className={classes.role}>{role}</ul>
        </li>
        {workType}
      </ul>
      <div>
        <h2 className={classes.title}>{title}</h2>
        <a href={githubHrefSrc} target="_blank" rel="noopener noreferrer" aria-label={githubLinkLabel}>
          <StaticImage src="../../images/logo/logo-github-white.svg" alt="Github logo" width={25} height={25} />
        </a>
      </div>
      {description}
      <ul className={classes.techStackContainer} aria-label="사용 기술">
        {techStack}
      </ul>
    </article>
  );
};

export default Project;
