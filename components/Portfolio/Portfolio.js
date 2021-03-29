import styles from "./Portfolio.module.css";

import Image from "next/image";

const Portfolio = () => {
  return (
    <div id="Portfolio" className={styles.wrapper}>
      <h2>Portfolio</h2>
      <p>
        Here are some of my recent projects and online courses. Check out my{" "}
        <a
          href="https://github.com/ibrahimFirat99?tab=repositories"
          target="_blank"
        >
          Github
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/ibrahim-firat-046048151/"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        for my other projects.
      </p>
      <div className={styles.projectsWrapper}>
        <div className={styles.project}>
          <a href="https://maribotech.com" target="_blank">
            <div className={styles.top}>
              <h3>Maribotech</h3>
            </div>
            <div className={styles.bottom}>
              <p>
                Maribotech is a blog website where you can find interesting
                articles on Technology, Software Engineering, Reviews and many
                more. The tech stack includes{" "}
                <span style={{ background: "#e34c26", color: "#f4f4f4" }}>
                  HTML
                </span>{" "}
                <span style={{ background: "#264de4", color: "#f4f4f4" }}>
                  CSS
                </span>{" "}
                <span style={{ background: "#61DBFB" }}>ReactJS</span>{" "}
                <span style={{ background: "#333", color: "#f4f4f4" }}>
                  NextJS
                </span>{" "}
                <span style={{ background: "#3FA037" }}>MongoDB</span> and{" "}
                <span style={{ background: "#FF9900" }}>AWS</span>.
              </p>
            </div>
          </a>
        </div>
        <div className={styles.project}>
          <a
            href="https://www.udemy.com/certificate/UC-4c595d76-e3b6-4901-8827-553e7ed9604a/"
            target="_blank"
          >
            <div className={styles.top}>
              <h3>The MERN Stack (Online Course)</h3>
            </div>
            <div className={styles.bottom}>
              <p>
                An online course on MERN stack which includes usage of{" "}
                <span style={{ background: "#3FA037" }}>MongoDB</span>{" "}
                <span style={{ background: "#333", color: "#f4f4f4" }}>
                  ExpressJS
                </span>{" "}
                <span style={{ background: "#61DBFB" }}>ReactJS</span> and{" "}
                <span style={{ background: "#333", color: "#f4f4f4" }}>
                  NodeJS
                </span>{" "}
                all together.
              </p>
            </div>
          </a>
        </div>
        <div className={styles.project}>
          <a
            href="https://github.com/ibrahimFirat99?tab=repositories"
            target="_blank"
          >
            <div className={styles.top}>
              <h3>Data Visualisation Platform (Undergraduate Thesis)</h3>
            </div>
            <div className={styles.bottom}>
              <p>
                Designed and developed a data visualisation platform where I
                visualised data of University of Reading Computer Science
                Department. The tech stack includes{" "}
                <span style={{ background: "#F0DB4F" }}>JavaScript</span>{" "}
                <span style={{ background: "#333", color: "#f4f4f4" }}>
                  NodeJS
                </span>{" "}
                <span style={{ background: "#e34c26", color: "#f4f4f4" }}>
                  HTML
                </span>{" "}
                <span style={{ background: "#264de4", color: "#f4f4f4" }}>
                  CSS
                </span>{" "}
                <span style={{ background: "#333", color: "#f4f4f4" }}>
                  ExpressJS
                </span>{" "}
                and{" "}
                <span style={{ background: "#333", color: "#f4f4f4" }}>
                  D3JS
                </span>{" "}
                (for visualisation). I cannot showcase the platform as it
                contains private data.
              </p>
            </div>
          </a>
        </div>
        <div className={styles.project}>
          <a
            href="https://www.udemy.com/certificate/UC-8b38daea-7dbf-4389-9375-0f68cb080569/"
            target="_blank"
          >
            <div className={styles.top}>
              <h3>React - The Complete Guide (Online Course)</h3>
            </div>
            <div className={styles.bottom}>
              <p>
                An online course on{" "}
                <span style={{ background: "#61DBFB" }}>ReactJS</span> where
                important concenpts such as Hooks, Redux, React Router, React
                State are covered.
              </p>
            </div>
          </a>
        </div>
        <div className={styles.project}>
          <a href="https://altayfirat.com" target="_blank">
            <div className={styles.top}>
              <h3>Personal Website (altayfirat.com)</h3>
            </div>
            <div className={styles.bottom}>
              <p>
                Designed and developed a simple personal website using only{" "}
                <span style={{ background: "#e34c26", color: "#f4f4f4" }}>
                  HTML
                </span>{" "}
                and{" "}
                <span style={{ background: "#264de4", color: "#f4f4f4" }}>
                  CSS.
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
