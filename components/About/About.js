import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        Hey, I am <span>Ibrahim Firat!</span>
      </h1>
      <p>
        I am a Full-Stack Web Developer and Data Scientist. I have experience
        with a range of different programming languages (JavaScript, Python,
        Java, C, C++, C#), frameworks (ReactJS, NextJS) and technologies
        (Databases, AWS). Every project needs a different skillset depending on
        the given requirements. I can covert your dreams and ideas into reality.{" "}
        <a href="#Contact">Contact me!</a>
      </p>
    </div>
  );
};

export default About;
