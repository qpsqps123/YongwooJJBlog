import React, { useContext } from "react";
import { SEO } from "@/components/seo";
import * as classes from "./InfoPage.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { RefContext } from "@/context/ref-context";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const InfoPage = () => {
  const { contactGithubIconRef } = useContext(RefContext);

  return (
    <React.Fragment>
      <Header />
      <main className={classes.mainContainer}>
        <section className={classes.introduce}>
          <h1 className="a11yHidden">Profile</h1 >
          <section className={classes.nameContainer}>
            <h2 className="a11yHidden">Name</h2>
            <p className={classes.name}>Yongwoo (Jake) Jeong | 정용우</p>
          </section>
          <section className={classes.profilePhoto}>
            <h2 className="a11yHidden">Profile Photo</h2 >
            <StaticImage src="../../images/profile/yongwoo-profile-v1.png" alt="정용우 프로필 사진" width={250} />
          </section>
          <div className={classes.RoleDescriptionContactContainer}>
            <div>
              <section>
                <h2 className="a11yHidden">Role</h2 >
                <p className={classes.role}>Front-end Developer</p>
              </section>
              <section>
                <h2 className="a11yHidden">Description</h2 >
                <p>
                  사용자에게 좋은 경험을 드릴 때 기쁨과 보람을 느낍니다.
                  <br />
                  문제 해결 본능이 기본 탑재되어 있습니다.
                  <br />
                  개발자지만 디자인과 기획에도 기웃거립니다.
                  <br />
                  인터랙션과 애니메이션, 그래픽스에도 관심이 있습니다.
                  <br />
                  365일 햄버거만 먹을 수 있을만큼 좋아한다는 사실을 최근에 깨달았습니다.
                  <br />
                  스트레스는 수면과 운동으로 푸는 편입니다. 운동은 헬스를 좋아합니다.
                  <br />
                  혼자서도 잘 놀지만, 함께 하는 작업도 좋아합니다.
                </p>
              </section>
              <section className={classes.contactContainer}>
                <h2 className="a11yHidden">Contact</h2 >
                <ul>
                  <li>
                    <a
                      href="https://github.com/qpsqps123"
                      title="YongwooJJ Github"
                      target="_blank"
                      rel="noopener noreferrer"
                      ref={contactGithubIconRef}
                      data-invert
                      aria-label="정용우 Github"
                    >
                      <StaticImage src="../../images/logo/logo-github-black.svg" alt="Github logo" width={25} height={25} />
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
                      <StaticImage src="../../images/logo/logo-linkedin.png" alt="Linkedin logo" width={25} height={25} />
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
                      <StaticImage src="../../images/logo/logo-gmail.png" alt="gmail logo" width={25} height={25} />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default InfoPage;

export const Head = () => {
  return <SEO title={"Info"} />;
};
