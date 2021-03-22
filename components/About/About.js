import styles from "./About.module.css";

const About = () => {
  return (
    <div id="About" className={styles.wrapper}>
      <h1>
        Hey, I am <span>Ibrahim Firat!</span>
      </h1>
      <p>
        I am a Full-Stack Web Developer and Data Scientist. I have worked with
        different programming languages (JavaScript, Python, Java, C, C++, C#),
        frameworks (ReactJS, NextJS) and technologies (Databases, AWS). Every
        project needs a different skillset depending on the given requirements.
        I can help you with coverting your dreams and ideas into reality.{" "}
        <a id={styles.contact} href="#Contact">
          Contact me!
        </a>
      </p>
      <a id={styles.resume} href="CV.pdf" target="_blank">
        My Resume
      </a>
    </div>
  );
};

export default About;
