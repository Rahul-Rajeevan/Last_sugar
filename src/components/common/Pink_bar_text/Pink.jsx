import React from "react";
import styles from "./pink.module.css";

const Pink = ({ text,theme }) => {
  return (
    <div id={styles.pink}>
      <p id={styles.pink_p} className={theme==='light'?styles.pink_p2:styles.pink_p1}>{text}</p>
    </div>
  );
};

export default Pink;
