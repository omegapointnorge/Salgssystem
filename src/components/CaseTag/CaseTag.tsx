import styles from "./CaseTag.module.css";
import React from "react";

interface CaseTagProps {
  tag: string;
  onClickHandler: () => void;
}

const CaseTag: React.FC<CaseTagProps> = ({ tag, onClickHandler }) => (
  <div className={styles.tag} onClick={(e) => onClickHandler()}>
    {tag}
  </div>
);

export default CaseTag;
