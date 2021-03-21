import React from "react";
import styles from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  return (
    <button className={styles.toggleBtn} onClick={props.click}>
      <div className={styles.toggleBtnLine}></div>
      <div className={styles.toggleBtnLine}></div>
      <div className={styles.toggleBtnLine}></div>
    </button>
  );
};

export default DrawerToggle;
