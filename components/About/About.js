import styles from "./About.module.css";

const About = () => {
  return (
    <div id="About" className={styles.wrapper}>
      <div className={styles.about}>
        <h1>
          Hey, I am <span>Ibrahim Firat!</span>
        </h1>
        <p>
          I am a Full-Stack Web Developer and Data Scientist. I have worked with
          different programming languages (JavaScript, Python, Java, C, C++,
          C#), frameworks (ReactJS, NextJS) and technologies (Databases, AWS).
          Every project needs a different skillset depending on the given
          requirements. I can help you with coverting your dreams and ideas into
          reality.{" "}
          <a className={styles.contact} href="#Contact">
            Contact me!
          </a>
        </p>
        <a className={styles.resume} href="IbrahimFiratCV.pdf" target="_blank">
          My Resume
        </a>
      </div>
      <div className={styles.milestones}>
        <h2>Milestones</h2>
        <div className={styles.eventWrapper}>
          <h3>2021</h3>
          <div className={styles.event}>
            <h4>Started pursuing Master's degree</h4>
            <p>
              I started pursuing a Master's Degree in Computer Engineering at
              Eastern Mediterranean University.
            </p>
          </div>
        </div>
        <div className={styles.eventWrapper}>
          <h3>2020</h3>
          <div className={styles.event}>
            <h4>
              Designed & Developed{" "}
              <a href="https://maribotech.com" target="_blank">
                Maribotech!
              </a>
            </h4>
            <p>I designed and developed a blog website with a friend.</p>
          </div>
          <div className={styles.event}>
            <h4>Graduated University</h4>
            <p>
              I graduated from the University of Reading with First Class Honors
              in Computer Science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
