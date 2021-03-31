import React from "react";
import logo from "../../assets/itverketLogo.svg";
import styles from "./Header.module.css";

const Header = ({ count, handleIncrementClick }: any) => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <span className={styles.headerHeading}>ITverket Salgssystem</span>
    </div>
  );
};

export default Header;
