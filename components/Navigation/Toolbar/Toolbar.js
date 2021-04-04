import DrawerToggle from "../DrawerToggle/DrawerToggle";
import styles from "./Toolbar.module.css";

import Link from "next/link";

const Toolbar = (props) => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbar__toggle}>
        <DrawerToggle click={props.drawerToggleClickHandler} />
      </div>
      <div className={styles.toolbar__logo}>
        <Link href="/">
          <a>
            Ibrahim <span>Firat</span>
          </a>
        </Link>
      </div>
      <div className={styles.toolbar__navItems}>
        <ul>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Toolbar;
