import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div id="Blog" className={styles.wrapper}>
      <h2>Blog</h2>
      <p>
        These are my latest and favourite blogs on{" "}
        <a href="https://maribotech.com" target="_blank">
          Maribotech
        </a>
        .
      </p>
      <div className={styles.blog}>
        <a
          href="https://maribotech.com/article/C4UxfotDuEPadVZj6a4v"
          target="_blank"
        >
          <div className={styles.left}>
            <h3>How to use Fiverr to Attract More Visitors to your Website</h3>
            <span className={styles.readTime}>8 minutes</span>
            <span className={styles.date}>30/01/2021</span>
          </div>
          <div className={styles.right}>
            <p>
              Nowadays, having a website with a strong fan base is a golden key
              for almost every business and organisation as it provides a way to
              connect and communicate with their followers. However, keeping
              existing visitors and attracting new ones is a slightly
              challenging task.
            </p>
          </div>
        </a>
      </div>
      <div className={styles.blog}>
        <a
          href="https://maribotech.com/article/9t00yhL1LTrckua2gdIJ"
          target="_blank"
        >
          <div className={styles.left}>
            <h3>Computer Science vs Software Engineering</h3>
            <span className={styles.readTime}>5 minutes</span>
            <span className={styles.date}>10/01/2021</span>
          </div>
          <div className={styles.right}>
            <p>
              If you want to learn more about Computer Science and Software
              Engineering, we have good news, you're in the right place. This
              article aims to get our readers more familiar with these two study
              fields by providing descriptions, real life examples and our
              honest opinions.
            </p>
          </div>
        </a>
      </div>
      <div className={styles.blog}>
        <a
          href="https://maribotech.com/article/Mvdm7AQTlKjsaZbwDxpt"
          target="_blank"
        >
          <div className={styles.left}>
            <h3>How to Become a Web Developer</h3>
            <span className={styles.readTime}>5 minutes</span>
            <span className={styles.date}>10/01/2021</span>
          </div>
          <div className={styles.right}>
            <p>
              It is undeniable that the Internet is growing at a very fast pace.
              Today, websites form a significant amount of the internet and it
              is our go to place when we need to find information, talk with
              someone and so on. In fact, the Internet is far more complicated
              than just a few websites.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Blog;
