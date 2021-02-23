import styles from "./TagContainer.module.css";
import CaseTag from "../CaseTag/CaseTag";
import { useState } from "react";

const TagContainer = ({ caseTags = [] }) => {
  const [local_caseTags, setCaseTags] = useState([...caseTags]);

  const onEnterPressedTags = (event) => {
    if (event.key === "Enter" && event.target.value?.length > 0) {
      setCaseTags([...local_caseTags, event.target.value]);
      event.target.value = "";
    }
  };

  const onClickTag = (index) => {
    const newTags = [...local_caseTags].filter((_, i) => i !== index);
    setCaseTags(newTags);
  };
  return (
    <div className={styles.tagContainer}>
      <input
        name="case"
        id="case"
        placeholder="Case tags"
        onKeyDown={(e) => onEnterPressedTags(e)}
      />
      <div className={styles.tags}>
        {local_caseTags.map((tag, i) => (
          <CaseTag key={i} onClickHandler={() => onClickTag(i)} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default TagContainer;
