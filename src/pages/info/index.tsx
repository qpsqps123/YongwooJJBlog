import React, { useContext } from "react";
import { SEO } from "@/components/seo";
import * as classes from "./InfoPage.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { RefContext } from "@/context/ref-context";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Layout from "@/components/layout";

const InfoPage = () => {
  const { contactGithubIconRef } = useContext(RefContext);

  return (
    <Layout>
      <Header />
      <main className={classes.mainContainer}>
        <section className={classes.introduce}>
          <h1 className="a11yHidden">Profile</h1>
          <section className={classes.nameContainer}>
            <h2 className="a11yHidden">Name</h2>
            <p className={classes.name}>정용우 | Yongwoo Jeong </p>
          </section>
          <section className={classes.profilePhoto}>
            <h2 className="a11yHidden">Profile Photo</h2>
            <StaticImage src="../../images/profile/yongwoo-profile-v1.png" alt="정용우 프로필 사진" width={180} />
          </section>
          <div className={classes.RoleDescriptionContactContainer}>
            <div>
              <section>
                <h2 className="a11yHidden">Role</h2>
                <p className={classes.role}>Developer</p>
              </section>
              <section>
                <h2 className="a11yHidden">Description</h2>
                <p>공학과 예술을 좋아하는 정용우라고 합니다. 반갑습니다 :-)</p>
              </section>
              <section className={classes.contactContainer}>
                <h2 className="a11yHidden">Contact</h2>
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
    </Layout>
  );
};

export default InfoPage;

export const Head = () => {
  return <SEO title={"Info"} />;
};
