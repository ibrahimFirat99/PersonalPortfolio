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
        <a className={styles.resume} href="/IbrahimFiratCV.pdf" target="_blank">
          My Resume
        </a>
      </div>
      <div className={styles.milestones}>
        <h2>Milestones</h2>
        <p>Here are some of the important events and milestones in my life.</p>
        <div className={styles.eventWrapper}>
          <h3>2021</h3>
          <div className={styles.event}>
            <h4>Started pursuing Master's degree</h4>
            <p>
              I started pursuing a Master's Degree in Computer Engineering at
              Eastern Mediterranean University.
            </p>
          </div>
          <div className={styles.event}>
            <h4>Update on my book chapter</h4>
            <p>
              My book chapter, "
              <a
                href="https://www.igi-global.com/chapter/inevitable-battle-against-botnets/261968"
                target="_blank"
              >
                Inevitable Battle Against Botnets
              </a>
              ", has been selected by IGI Global’s executive editorial board to
              be included in IGI Global research anthology titled Research
              Anthology on Combating Denial-of-Service Attacks.
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
            <h4>Graduated from University</h4>
            <p>
              I graduated from the University of Reading with First Class Honors
              in Computer Science.
            </p>
          </div>
          <div className={styles.event}>
            <h4>Completed my final year project</h4>
            <p>
              I designed and developed a data visualisation platform using
              JavaScript and related libraries for my final year project and
              wrote a thesis about it.
            </p>
          </div>
        </div>
        <div className={styles.eventWrapper}>
          <h3>2019</h3>
          <div className={styles.event}>
            <h4>Wrote my first ever book chapter</h4>
            <p>
              My first professional academic work. I wrote a book chapter (
              <a
                href="https://www.igi-global.com/chapter/inevitable-battle-against-botnets/228468"
                target="_blank"
              >
                Inevitable Battle Against Botnets
              </a>
              ) and it has been published by IGI GLOBAL.
            </p>
          </div>
        </div>
        <div className={styles.eventWrapper}>
          <h3>2018</h3>
          <div className={styles.event}>
            <h4>Internships & Work Experiences</h4>
            <p>
              I was student Demonstrator & Ambadassor at the University of
              Reading. I helped students with solving thier programming related
              problems, debugged their codes and marked their work. During
              summer breaks, I worked as a intern at different organisations
              including Banks, ISPs and so on. I have had chance to learn
              different technical and soft skills.
            </p>
          </div>
        </div>
        <div className={styles.eventWrapper}>
          <h3>2017</h3>
          <div className={styles.event}>
            <h4>Started University</h4>
            <p>
              I started studying Computer Science at the University of Reading.
            </p>
          </div>
          <div className={styles.event}>
            <h4>Graduated from High School</h4>
            <p>
              After completing my IGCSE, AS Level and A Level exams, I graduated
              from high school.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
