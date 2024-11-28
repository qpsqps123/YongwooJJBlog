import { ReactElement } from "react";

export interface IProjectProps {
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
