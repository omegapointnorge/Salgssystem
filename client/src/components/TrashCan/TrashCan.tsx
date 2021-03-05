import React from "react";
import styles from "./TrashCan.module.css";

type Size = "s" | "m" | "l";

interface TrashCanProps {
  size: Size;
}

const TrashCan: React.FC<TrashCanProps> = ({ size }) => {
  let scale: number;
  switch (size) {
    case "s":
      scale = 0.3;
      break;
    case "m":
      scale = 0.5;
      break;
    case "l":
      scale = 0.8;
      break;
    default:
      scale = 1;
  }
  return (
    <div className={styles.container} style={{ transform: `scale(${scale})` }}>
      <span className={styles.bucket}>
        <span className={styles.lid}></span>
        <i className={styles.stripes}></i>
      </span>
    </div>
  );
};

export default TrashCan;
