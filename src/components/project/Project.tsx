import React from "react";
import * as classes from "./Project.module.scss";
import { IProjectProps } from "@/types/components/project/project";

const Project = ({ hrefSrc, linkLabel, imgSrc, imgAlt, role, workType, title, description, techStack }: IProjectProps) => {
  return (
    <article className={classes.projectContainer}>
      <div className={classes.thumbnailContainer}>
        <a href={hrefSrc} target="_blank" rel="noopener noreferrer" aria-label={linkLabel}>
          <img src={imgSrc} alt={imgAlt} loading="lazy" />
        </a>
      </div>
      <ul className={classes.roleAndWorkType}>
        <li>
          <ul className={classes.role}>{role}</ul>
        </li>
        {workType}
      </ul>
      <h2 className={classes.title}>{title}</h2>
      {description}
      <ul className={classes.techStackContainer} aria-label="사용 기술">
        {techStack}
      </ul>
    </article>
  );
};

export default Project;
