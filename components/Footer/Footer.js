import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>All rights are reserved.</p>
      </div>
      <div>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=1002018020"
              target="_blank"
            >
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ibo_firat/" target="_blank">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/ibrahimFirat99" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ibrahim-firat-046048151/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
