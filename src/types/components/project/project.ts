import { ReactElement } from "react";

export interface IProjectProps {
  deployHrefSrc: string;
  deployLinkLabel: string;
  imgSrc: string;
  imgAlt: string;
  role: ReactElement;
  workType: ReactElement;
  title: string;
  githubHrefSrc: string;
  githubLinkLabel: string;
  description: ReactElement;
  techStack: ReactElement;
}
