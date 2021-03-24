import styles from "./Portfolio.module.css";

import Image from "next/image";

const Portfolio = () => {
  return (
    <div id="Portfolio" className={styles.wrapper}>
      <h2>Portfolio</h2>
      <p>Here are some of my recent projects and online courses.</p>
      <div className={styles.projectsWrapper}>
        <div className={styles.project}>
          <a href="https://maribotech.com" target="_blank">
            <div className={styles.left}>
              <h3>Maribotech</h3>
            </div>
            <div className={styles.right}>
              <p>
                Maribotech is a blog website where you can find interesting
                articles on Technology, Software Engineering, Reviews and many
                more. The tech stack includes{" "}
                <span style={{ background: "#F0DB4F" }}>JavaScript</span>{" "}
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
          <a href="https://maribotech.com" target="_blank">
            <div className={styles.left}>
              <h3>Maribotech</h3>
            </div>
            <div className={styles.right}>
              <p>
                Maribotech is a blog website where you can find interesting
                articles on Technology, Software Engineering, Reviews and many
                more. The tech stack includes JavaScript, ReactJS, NextJS,
                MongoDB and AWS.
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className={styles.coursesWrapper}>
        <div className={styles.course}></div>
      </div>
    </div>
  );
};

export default Portfolio;
