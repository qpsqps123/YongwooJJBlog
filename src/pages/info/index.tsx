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
            <StaticImage src="../../images/profile/yongwoo-profile-v2.png" alt="정용우 프로필 사진" width={180} />
          </section>
          <div className={classes.RoleDescriptionContactContainer}>
            <div>
              <section>
                <h2 className="a11yHidden">Role</h2>
                <p className={classes.role}>Frontend Developer</p>
              </section>
              <section>
                <h2 className="a11yHidden">Description</h2>
                <ul>
                  <li>문제를 보면 해결하고 싶다는 욕구가 본능적으로 듭니다. 그래서 공학도가 되었나 봅니다.</li>
                  <li>일할 때는 태도가 중요하다고 생각합니다. 태도가 좋은 사람으로 기억되고 싶습니다.</li>
                  <li>애니메이션을 좋아합니다. 그래서 프론트엔드나 그래픽스 분야에 관심을 가지게 된 것 같습니다.</li>
                  <li>요리가 취미입니다. 특히 바쁜 주방에서 일하는 걸 좋아합니다. 그런 환경에서 더 희열을 느낍니다.</li>
                  {/* <li>음악도 좋아합니다. 작업할 때는 EDM을 주로 듣습니다. 음악을 들으며 작업하면 집중력 +10이 됩니다.</li> */}
                </ul>
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
