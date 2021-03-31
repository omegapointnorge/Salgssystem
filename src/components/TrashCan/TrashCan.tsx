import React from "react";
import styles from "./TrashCan.module.css";

type Size = "s" | "m" | "l";

interface TrashCanProps {
  size: Size;
  hover?: boolean;
}

const TrashCan: React.FC<TrashCanProps> = ({ size, hover }) => {
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
    // <div className={styles.container} style={{ transform: `scale(${scale})` }}>

let lidStyle = styles.lid;
if (hover) lidStyle = `${styles.lid} ${styles.animateLid}`;
    
  return (
    <div className={styles.masterContainer} >
    <div className={styles.container} >
      <span className={styles.bucket}>
        {/* <span className={`${styles.lid} ${styles.animateLid}`}></span> */}
        <span className={lidStyle}></span>
        <i className={styles.stripes}></i>
      </span>
    </div>
    </div>
  );
};

export default TrashCan;
