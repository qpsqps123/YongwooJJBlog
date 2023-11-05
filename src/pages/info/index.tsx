import * as React from "react";
import Header from "../../layout/Header";
import { SEO } from "../../components/seo";
import * as classes from "./InfoPage.module.scss";

const InfoPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.container}>
        <h2 className={classes.name}>Yongwoo (Jake) Jeong | 정용우</h2>
        <section className={classes.introduce}>
          <h3>UX Engineer | Front-end Developer</h3>
          <p>
            항상 좋은 사용자 경험을 위해 고민합니다. 인터랙션과 애니메이션에
            관심이 많고, 이와 함께 성능과 접근성의 개선을 통해 사용자에게 좋은
            경험을 줄 수 있도록 노력합니다. 데이터가 모든 것을 말하지는 않지만,
            데이터와 근거로 일하는 것을 지향합니다. ‘벚꽃이지면’ 프로젝트에서 팀
            리더를 맡아 팀을 이끈 경험이 있습니다. 혼자서는 해결하기 힘든 문제를
            함께하면 보다 쉽게 해결할 수 있다는 것을 경험으로 알고 있습니다.
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/qpsqps123"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/%EC%9A%A9%EC%9A%B0-%EC%A0%95-baab5a256/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </li>
            <li>
              <a
                href="mailto:qpsqps321@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                e-mail
              </a>
            </li>
          </ul>
        </section>
      </main>
    </React.Fragment>
  );
};

export default InfoPage;

export const Head = () => {
  return <SEO title={"Info"} />;
};
