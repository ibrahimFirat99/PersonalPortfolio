import DrawerToggle from "../DrawerToggle/DrawerToggle";
import styles from "./Toolbar.module.css";

const Toolbar = (props) => {
  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbar__toggle}>
        <DrawerToggle click={props.drawerToggleClickHandler} />
      </div>
      <div className={styles.toolbar__logo}>
        <a href="#Home">Logo</a>
      </div>
      <div className={styles.toolbar__navItems}>
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
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
