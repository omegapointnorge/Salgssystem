import styles from "./CaseTag.module.css";

const CaseTag = ({ tag, onClickHandler }) => (
  <div className={styles.tag} onClick={onClickHandler}>
    {tag}
  </div>
);

export default CaseTag;
