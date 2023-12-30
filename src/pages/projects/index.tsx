import React from "react";
import { SEO } from "@/components/seo";
import * as classes from "./ProjectsPage.module.scss";
import xg4uGif from "@/images/projects-thumbnail/thumbnail-x-mas-gift-4-u-2023.gif";
import mocbGif from "@/images/projects-thumbnail/thumbnail-message-of-cherry-blossom.gif";
import gdGif from "@/images/projects-thumbnail/thumbnail-gangnam-delivery.gif";
import bcGif from "@/images/projects-thumbnail/thumbnail-braun-calculator.gif";
import sgGif from "@/images/projects-thumbnail/thumbnail-simon-game.gif";
import ybGif from "@/images/projects-thumbnail/thumbnail-yongwoojj-blog.png";

const Header = React.lazy(() => import("@/layout/Header"));

const ProjectsPage = () => {
  return (
    <React.Suspense fallback="Loading...">
      <React.Fragment>
        <h1 className="a11yHidden">Yongwoo (Jake) Jeong Blog</h1>
        <Header />
        <main className={classes.mainContainer}>
          <section className={classes.projectsContainer}>
            <h2 className={classes.projectsHeading}>Projects</h2>
            <ul className={classes.projects}>
              <li>
                <article className={classes.projectContainer}>
                  <div className={classes.thumbnailContainer}>
                    <a
                      href="https://x-mas-gift-4-u-2023.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="산타와 히로인 프로젝트 페이지로 연결."
                    >
                      <img src={xg4uGif} alt="x-mas gift 4 u thumbnail" />
                    </a>
                  </div>
                  <h3>X-Mas Gift 4 U.</h3>
                  <p>
                    2023 크리스마스 맞이해, 아내를 위해 준비한 랜덤 추첨 박스
                    선물 프로젝트.
                  </p>
                  <ul
                    className={classes.techStackContainer}
                    aria-label="사용 기술"
                  >
                    <li>Sass</li>
                    <li>CSS Module</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Next.js</li>
                    <li>Firebase</li>
                    <li>Vercel</li>
                  </ul>
                </article>
              </li>
              <li>
                <article className={classes.projectContainer}>
                  <div className={classes.thumbnailContainer}>
                    <a href="/" aria-label="정용우 블로그 소개 페이지로 연결.">
                      <img src={ybGif} alt="Yongwoo blog thumbnail" />
                    </a>
                  </div>
                  <h3>YongwooJJ Blog</h3>
                  <p>
                    나를 소개하고 글을 포스팅하기 위한 목적으로 만든 개인
                    블로그.
                  </p>
                  <ul
                    className={classes.techStackContainer}
                    aria-label="사용 기술"
                  >
                    <li>Sass</li>
                    <li>CSS Module</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>MDX</li>
                    <li>Formik</li>
                    <li>Gatsby</li>
                    <li>Vercel</li>
                  </ul>
                </article>
              </li>
              <li>
                <article className={classes.projectContainer}>
                  <div className={classes.thumbnailContainer}>
                    <a
                      href="https://message-of-cherryblossom.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="벚꽃이지면 프로젝트 페이지로 연결."
                    >
                      <img
                        src={mocbGif}
                        alt="Message of cherry blossom thumbnail"
                      />
                    </a>
                  </div>
                  <h3>Message of Cherry Blossom</h3>
                  <p>
                    벚꽃 개화시기에 사람들과 편지를 주고 받는 롤링 페이퍼
                    서비스. 한국어 제목은 '벚꽃이지면'.
                  </p>
                  <ul
                    className={classes.techStackContainer}
                    aria-label="사용 기술"
                  >
                    <li>Sass</li>
                    <li>CSS Module</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>Vite</li>
                    <li>Vercel</li>
                  </ul>
                </article>
              </li>
              <li>
                <article className={classes.projectContainer}>
                  <div className={classes.thumbnailContainer}>
                    <a
                      href="https://gangnam-delivery-service.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="강남 딜리버리 프로젝트 페이지로 연결."
                    >
                      <img
                        src={gdGif}
                        alt="Gangnam delivery service thumbnail"
                      />
                    </a>
                  </div>
                  <h3>Gangnam Delivery</h3>
                  <p>
                    강남 레스토랑에 배달 서비스가 있으면 어떨까 싶어 만든 데모
                    사이트.
                  </p>
                  <ul
                    className={classes.techStackContainer}
                    aria-label="사용 기술"
                  >
                    <li>CSS Module</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Firebase</li>
                    <li>CRA</li>
                    <li>Vercel</li>
                  </ul>
                </article>
              </li>
              <li>
                <article className={classes.projectContainer}>
                  <div className={classes.thumbnailContainer}>
                    <a
                      href="https://qpsqps123.github.io/braun-calculator/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="브라운 계산기 프로젝트 페이지로 연결."
                    >
                      <img src={bcGif} alt="Braun calculator thumbnail" />
                    </a>
                  </div>
                  <h3>Braun Calculator</h3>
                  <p>
                    좋아하는 디자인 회사인 브라운의 계산기를 웹으로 옮겨본
                    프로젝트.
                  </p>
                  <ul
                    className={classes.techStackContainer}
                    aria-label="사용 기술"
                  >
                    <li>CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </article>
              </li>
              <li>
                <article className={classes.projectContainer}>
                  <div className={classes.thumbnailContainer}>
                    <a
                      href="https://qpsqps123.github.io/simon-game/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="사이먼 게임 프로젝트 페이지로 연결."
                    >
                      <img src={sgGif} alt="Simon game thumbnail" />
                    </a>
                  </div>
                  <h3>Simon Game</h3>
                  <p>
                    단기 기억 게임인 사이먼 게임을 웹상에서 즐길 수 있도록 만든
                    프로젝트.
                  </p>
                  <ul
                    className={classes.techStackContainer}
                    aria-label="사용 기술"
                  >
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                  </ul>
                </article>
              </li>
            </ul>
          </section>
        </main>
        <footer className={classes.footerContainer}></footer>
      </React.Fragment>
    </React.Suspense>
  );
};

export default ProjectsPage;

export const Head = () => {
  return <SEO title={"Project"} />;
};
