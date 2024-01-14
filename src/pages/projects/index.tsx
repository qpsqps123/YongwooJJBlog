import React from "react";
import { SEO } from "@/components/seo";
import * as classes from "./ProjectsPage.module.scss";
import xg4uGif from "@/images/projects-thumbnail/thumbnail-x-mas-gift-4-u-2023.gif";
import mocbGif from "@/images/projects-thumbnail/thumbnail-message-of-cherry-blossom.gif";
import gdGif from "@/images/projects-thumbnail/thumbnail-gangnam-delivery.gif";
import bcGif from "@/images/projects-thumbnail/thumbnail-braun-calculator.gif";
import sgGif from "@/images/projects-thumbnail/thumbnail-simon-game.gif";
import ybGif from "@/images/projects-thumbnail/thumbnail-yongwoojj-blog.png";
import Header from "@/layout/Header";
import Project from "@/components/Project";

const ProjectsPage = () => {
  return (
    <React.Fragment>
      <h1 className="a11yHidden">Yongwoo (Jake) Jeong Blog</h1>
      <Header />
      <main className={classes.mainContainer}>
        <h2 className={classes.projectsHeading}>Projects</h2>
        <section className={classes.projectsContainer}>
          <section>
            <h3 className={classes.years}>2023</h3>
            <ul className={classes.projects}>
              <li>
                <Project
                  hrefSrc="https://x-mas-gift-4-u-2023.vercel.app/"
                  linkLabel="크리스마스 선물 프로젝트 페이지로 연결."
                  imgSrc={xg4uGif}
                  imgAlt="X-mas gift 4 u thumbnail"
                  role={
                    <React.Fragment>
                      <li>Development</li>
                      <li>Design</li>
                    </React.Fragment>
                  }
                  workType={<li>Personal work</li>}
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
                      <li>TypeScript</li>
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
                  hrefSrc="/"
                  linkLabel="정용우 블로그 소개 페이지로 연결."
                  imgSrc={ybGif}
                  imgAlt="Yongwoo blog thumbnail"
                  role={
                    <React.Fragment>
                      <li>Development</li>
                      <li>Design</li>
                    </React.Fragment>
                  }
                  workType={<li>Personal work</li>}
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
                  hrefSrc="https://message-of-cherryblossom.vercel.app/"
                  linkLabel="벚꽃이지면 프로젝트 페이지로 연결."
                  imgSrc={mocbGif}
                  imgAlt="Message of cherry blossom thumbnail"
                  role={
                    <React.Fragment>
                      <li>Development</li>
                      <li>Design</li>
                    </React.Fragment>
                  }
                  workType={<li>Collaborative work</li>}
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
                  hrefSrc="https://qpsqps123.github.io/braun-calculator/"
                  linkLabel="브라운 계산기 프로젝트 페이지로 연결."
                  imgSrc={bcGif}
                  imgAlt="Braun calculator thumbnail"
                  role={
                    <React.Fragment>
                      <li>Development</li>
                      <li>Design</li>
                    </React.Fragment>
                  }
                  workType={<li>Personal work</li>}
                  title="Braun Calculator"
                  description={
                    <p>
                      좋아하는 디자인 회사인 브라운의 계산기를 웹으로 옮겨본
                      프로젝트.
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
                  hrefSrc="https://gangnam-delivery-service.vercel.app/"
                  linkLabel="강남 딜리버리 프로젝트 페이지로 연결."
                  imgSrc={gdGif}
                  imgAlt="Gangnam delivery service thumbnail"
                  role={
                    <React.Fragment>
                      <li>Development</li>
                    </React.Fragment>
                  }
                  workType={<li>Assignment work</li>}
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
            </ul>
          </section>
          <section>
            <h3 className={classes.years}>2022</h3>
            <ul className={classes.projects}>
              <li>
                <Project
                  hrefSrc="https://qpsqps123.github.io/simon-game/"
                  linkLabel="사이먼 게임 프로젝트 페이지로 연결."
                  imgSrc={sgGif}
                  imgAlt="Simon game thumbnail"
                  role={
                    <React.Fragment>
                      <li>Development</li>
                    </React.Fragment>
                  }
                  workType={<li>Assignment work</li>}
                  title="Simon Game"
                  description={
                    <p>
                      인터넷 강의 과제로 만든 서비스. 단기 기억 전자 게임
                      ‘사이먼 게임’을 웹에서 즐길 수 있도록 만든 프로젝트.
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
        </section>
      </main>
      <footer className={classes.footerContainer}></footer>
    </React.Fragment>
  );
};

export default ProjectsPage;

export const Head = () => {
  return <SEO title={"Project"} />;
};
