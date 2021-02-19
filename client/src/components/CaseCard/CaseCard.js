import styles from "./CaseCard.module.css";
import { useState } from "react";

const ComponentName = (props) => {
  const [caseTags, setCaseTags] = useState([]);

  const onEnterPressedTags = (event) => {
    if (event.key === "Enter" && event.target.value?.length > 0) {
      setCaseTags([...caseTags, event.target.value]);
      event.target.value = "";
    }
  };

  const onClickTag = (index) => {
      const newTags = [...caseTags].filter((_, i) => i !== index);
      setCaseTags(newTags);
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.customerAvatar}></div>
        <div className={styles.ownerAvatar}></div>
      </div>
      <div className={styles.details}>
        <div className={styles.caseContainer}>
          <input
            name="case"
            id="case"
            placeholder="Case tags"
            onKeyDown={(e) => onEnterPressedTags(e)}
          />
          <div className={styles.tags}>
            {caseTags.map((tag, i) => (
              <div className={styles.tag} key={i} onClick={() => onClickTag(i)}>{tag}</div>
            ))}
          </div>
        </div>
        <textarea name="profilert" id="profilert" placeholder="Profilert" />
        <input name="dato_frist" id="dato_frist" placeholder="Dato - Frist" />
        <input name="kontakt" id="kontakt" placeholder="Kontakt" />
      </div>
    </div>
  );
};

export default ComponentName;
