import styles from "./TagContainer.module.css";
import CaseTag from "../CaseTag/CaseTag";
import { useState } from "react";

const TagContainer = (props) => {
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
        {caseTags.map((tag, i) => (
          <CaseTag key={i} onClickHandler={() => onClickTag(i)} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default TagContainer;
