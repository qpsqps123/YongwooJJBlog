import React from "react";
import { SEO } from "@/components/seo";
import * as classes from "./ProjectsPage.module.scss";
import xg4uGif from "@/images/projects-thumbnail/thumbnail-x-mas-gift-4-u-2023.gif";
import mocbGif from "@/images/projects-thumbnail/thumbnail-message-of-cherry-blossom.gif";
import gdGif from "@/images/projects-thumbnail/thumbnail-gangnam-delivery.gif";
import bcGif from "@/images/projects-thumbnail/thumbnail-braun-calculator.gif";
import sgGif from "@/images/projects-thumbnail/thumbnail-simon-game.gif";
import ybGif from "@/images/projects-thumbnail/thumbnail-yongwoojj-blog.png";
import pdGif from "@/images/projects-thumbnail/thumbnail-poda.gif";
import Header from "@/components/header/Header";
import Project from "@/components/project/Project";
import Footer from "@/components/footer/Footer";

const ProjectsPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.mainContainer}>
        <h1 className={`${classes.projectsHeading} a11yHidden`}>Projects</h1>
        <section className={classes.projectsContainer}>
          <ul className={classes.projects}>
            <li>
              <Project
                deployHrefSrc="https://poda.vercel.app/"
                deployLinkLabel="PODA 배포 주소로 이동."
                imgSrc={pdGif}
                imgAlt="PODA thumbnail"
                role={
                  <React.Fragment>
                    <li>Development</li>
                    <li>Design</li>
                  </React.Fragment>
                }
                workType={<li>Collaborative work</li>}
                githubHrefSrc="https://github.com/FRONTENDSCHOOLPLUS2/PODA"
                githubLinkLabel="PODA Github로 이동."
                title="PODA"
                description={
                  <p>
                    일기를 빠르고 간편하게 작성하고, 같은 관심사를 가진 사람들과
                    교환해 볼 수 있는 메모 웹 앱.
                  </p>
                }
                techStack={
                  <React.Fragment>
                    <li>TailwindCSS</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>React Query</li>
                    <li>Zustand</li>
                    <li>Vercel</li>
                  </React.Fragment>
                }
              />
            </li>
            <li>
              <Project
                deployHrefSrc="https://x-mas-gift-4-u-2023.vercel.app/"
                deployLinkLabel="크리스마스 랜덤 선물 박스 배포 주소로 이동."
                imgSrc={xg4uGif}
                imgAlt="X-mas gift 4 u thumbnail"
                role={
                  <React.Fragment>
                    <li>Development</li>
                    <li>Design</li>
                  </React.Fragment>
                }
                workType={<li>Personal work</li>}
                githubHrefSrc="https://github.com/qpsqps123/x-mas-gift-4-u-2023"
                githubLinkLabel="크리스마스 랜덤 선물 박스 Github로 이동."
                title="X-Mas Gift 4 U."
                description={
                  <p>
                    2023 크리스마스 맞이해, 아내를 위해 준비한 랜덤 추첨 박스
                    선물 프로젝트.
                  </p>
                }
                techStack={
                  <React.Fragment>
                    <li>Sass</li>
                    <li>CSS Module</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Next.js</li>
                    <li>Firebase</li>
                    <li>Vercel</li>
                  </React.Fragment>
                }
              />
            </li>
            <li>
              <Project
                deployHrefSrc="/"
                deployLinkLabel="정용우 블로그 소개 주소로 이동."
                imgSrc={ybGif}
                imgAlt="Yongwoo blog thumbnail"
                role={
                  <React.Fragment>
                    <li>Development</li>
                    <li>Design</li>
                  </React.Fragment>
                }
                workType={<li>Personal work</li>}
                githubHrefSrc="https://github.com/qpsqps123/YongwooJJBlog"
                githubLinkLabel="정용우 블로그 Github로 이동."
                title="YongwooJJ Blog"
                description={
                  <p>
                    나를 소개하고 글을 포스팅하기 위한 목적으로 만든 개인
                    블로그.
                  </p>
                }
                techStack={
                  <React.Fragment>
                    <li>Sass</li>
                    <li>CSS Module</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>MDX</li>
                    <li>Formik</li>
                    <li>Gatsby</li>
                    <li>Vercel</li>
                  </React.Fragment>
                }
              />
            </li>
            <li>
              <Project
                deployHrefSrc="https://message-of-cherryblossom.vercel.app/"
                deployLinkLabel="벚꽃이지면 배포 주소로 이동."
                imgSrc={mocbGif}
                imgAlt="Message of cherry blossom thumbnail"
                role={
                  <React.Fragment>
                    <li>Development</li>
                    <li>Design</li>
                  </React.Fragment>
                }
                workType={<li>Collaborative work</li>}
                githubHrefSrc="https://github.com/cherry-6lossom/6lossom"
                githubLinkLabel="벚꽃이지면 Github로 이동."
                title="Message of Cherry Blossom"
                description={
                  <p>
                    벚꽃 개화시기에 사람들과 편지를 주고 받는 롤링 페이퍼
                    서비스. 한국어 제목은 '벚꽃이지면'.
                  </p>
                }
                techStack={
                  <React.Fragment>
                    <li>Sass</li>
                    <li>CSS Module</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>Vite</li>
                    <li>Vercel</li>
                  </React.Fragment>
                }
              />
            </li>
            <li>
              <Project
                deployHrefSrc="https://qpsqps123.github.io/braun-calculator/"
                deployLinkLabel="브라운 계산기 배포 주소로 이동."
                imgSrc={bcGif}
                imgAlt="Braun calculator thumbnail"
                role={
                  <React.Fragment>
                    <li>Development</li>
                    <li>Design</li>
                  </React.Fragment>
                }
                workType={<li>Personal work</li>}
                githubHrefSrc="https://github.com/qpsqps123/braun-calculator"
                githubLinkLabel="브라운 계산기 Github로 이동."
                title="Braun Calculator"
                description={
                  <p>
                    좋아하는 브랜드인 브라운의 계산기를 웹으로 옮겨본 프로젝트.
                  </p>
                }
                techStack={
                  <React.Fragment>
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </React.Fragment>
                }
              />
            </li>
            <li>
              <Project
                deployHrefSrc="https://gangnam-delivery-service.vercel.app/"
                deployLinkLabel="강남 딜리버리 배포 주소로 이동."
                imgSrc={gdGif}
                imgAlt="Gangnam delivery service thumbnail"
                role={
                  <React.Fragment>
                    <li>Development</li>
                  </React.Fragment>
                }
                workType={<li>Assignment work</li>}
                githubHrefSrc="https://github.com/qpsqps123/Gangnam-delivery-service"
                githubLinkLabel="강남 딜리버리 Github로 이동."
                title="Gangnam Delivery"
                description={
                  <p>
                    인터넷 강의 과제로 받은 데모 배달 서비스에, 일했던 강남
                    레스토랑 테마를 적용해 만든 프로젝트.
                  </p>
                }
                techStack={
                  <React.Fragment>
                    <li>CSS Module</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>CRA</li>
                    <li>Vercel</li>
                  </React.Fragment>
                }
              />
            </li>
            <li>
              <Project
                deployHrefSrc="https://qpsqps123.github.io/simon-game/"
                deployLinkLabel="사이먼 게임 배포 주소로 이동."
                imgSrc={sgGif}
                imgAlt="Simon game thumbnail"
                role={
                  <React.Fragment>
                    <li>Development</li>
                  </React.Fragment>
                }
                workType={<li>Assignment work</li>}
                githubHrefSrc="https://github.com/qpsqps123/simon-game"
                githubLinkLabel="사이먼 게임 Github로 이동."
                title="Simon Game"
                description={
                  <p>
                    인터넷 강의 과제로 만든 서비스. 단기 기억 전자 게임 ‘사이먼
                    게임’을 웹에서 즐길 수 있도록 만든 프로젝트.
                  </p>
                }
                techStack={
                  <React.Fragment>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                  </React.Fragment>
                }
              />
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ProjectsPage;

export const Head = () => {
  return <SEO title={"Project"} />;
};
