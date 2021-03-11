import React from "react";
import logo from "../../assets/itverketLogo.svg";

import styles from "./Header.module.css";

export const Header = ({ref}: any) => {
  console.log({ref});
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <span className={styles.headerHeading}>ITverket Salgssystem</span>
    </div>
  );
};



