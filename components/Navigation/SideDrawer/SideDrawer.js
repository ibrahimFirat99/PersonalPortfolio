import styles from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  let classes = [styles.sideDrawer];

  if (props.isOpen) {
    classes = [styles.sideDrawer, styles.open];
  }

  return (
    <nav className={classes.join(" ")}>
      <ul onClick={props.closeSideDrawer}>
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
    </nav>
  );
};

export default SideDrawer;
