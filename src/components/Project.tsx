import React, { ReactElement } from "react";
import * as classes from "./Project.module.scss";

interface PropType {
  hrefSrc: string;
  linkLabel: string;
  imgSrc: string;
  imgAlt: string;
  role: ReactElement;
  workType: ReactElement;
  title: string;
  description: ReactElement;
  techStack: ReactElement;
}

const Project = ({
  hrefSrc,
  linkLabel,
  imgSrc,
  imgAlt,
  role,
  workType,
  title,
  description,
  techStack,
}: PropType) => {
  return (
    <article className={classes.projectContainer}>
      <div className={classes.thumbnailContainer}>
        <a
          href={hrefSrc}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={linkLabel}
        >
          <img src={imgSrc} alt={imgAlt} />
        </a>
      </div>
      <ul className={classes.roleAndWorkType}>
        <li>
          <ul className={classes.role}>{role}</ul>
        </li>
        {workType}
      </ul>
      <h4 className={classes.title}>{title}</h4>
      {description}
      <ul className={classes.techStackContainer} aria-label="사용 기술">
        {techStack}
      </ul>
    </article>
  );
};

export default Project;
