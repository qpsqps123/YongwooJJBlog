import React, { useContext } from "react";
import Header from "../../layout/Header";
import { SEO } from "../../components/seo";
import * as classes from "./InfoPage.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { RefContext } from "../../context/refContext";

const InfoPage = () => {
  const { contactGithubIconRef } = useContext(RefContext);

  return (
    <React.Fragment>
      <Header />
      <main className={classes.mainContainer}>
        <section className={classes.introduce} aria-label="소개">
          <h2 className={classes.name} aria-label="이름">
            Yongwoo (Jake) Jeong | 정용우
          </h2>
          <div className={classes.profile}>
            <StaticImage
              src="../../images/profile/yongwoo-profile.png"
              alt="정용우 프로필 사진"
              width={250}
            />
          </div>
          <h3 aria-label="역할">UX Engineer</h3>
          <p aria-label="자기소개">
            하고자 하는 일이 공학과 디자인, 예술, 그 어딘가에 있습니다.
            <br />
            사용자에게 좋은 경험을 드리는 일에 기쁨을 느낍니다.
            <br />
            인터랙션과 애니메이션을 좋아합니다.
            <br />
            성능과 접근성을 향상시키는 일에 관심이 있습니다.
            <br />
            혼자서도 잘 놀지만, 함께 하는 작업도 좋아합니다.
          </p>
        </section>
        <section className={classes.contact} aria-label="연락처">
          <ul>
            <li>
              <a
                href="https://github.com/qpsqps123"
                title="YongwooJJ Github"
                target="_blank"
                rel="noopener noreferrer"
                ref={contactGithubIconRef}
                aria-label="정용우 Github"
              >
                <StaticImage
                  src="../../images/logo/logo-github-black.svg"
                  alt="Github logo"
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/%EC%9A%A9%EC%9A%B0-%EC%A0%95-baab5a256/"
                title="YongwooJJ Linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="정용우 Linkedin"
              >
                <StaticImage
                  src="../../images/logo/logo-linkedin.png"
                  alt="Linkedin logo"
                  width={25}
                  height={25}
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:qpsqps321@gmail.com"
                title="mail to YongwooJJ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="정용우 메일"
              >
                <StaticImage
                  src="../../images/logo/logo-gmail.png"
                  alt="gmail logo"
                  width={25}
                  height={25}
                />
              </a>
            </li>
          </ul>
        </section>
      </main>
      <footer className={classes.footerContainer}></footer>
    </React.Fragment>
  );
};

export default InfoPage;

export const Head = () => {
  return <SEO title={"Info"} />;
};
