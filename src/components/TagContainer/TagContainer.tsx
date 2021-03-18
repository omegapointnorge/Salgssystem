import styles from "./TagContainer.module.css";
import CaseTag from "../CaseTag/CaseTag";
import React, { KeyboardEvent } from "react";

interface TagContainerProps {
  caseTags: string[];
  onChangeTags: (caseTags: string[]) => void;
}

const TagContainer: React.FC<TagContainerProps> = ({
  caseTags = [],
  onChangeTags,
}) => {
  const onEnterPressedTags = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && event.currentTarget.value?.length > 0) {
      onChangeTags([...caseTags, event.currentTarget.value]);

      event.currentTarget.value = "";
    }
  };

  const onClickTag = (index: number) => {
    const newTags = [...caseTags].filter((_, i) => i !== index);
    onChangeTags(newTags);
  };
  return (
    <div className={styles.tagContainer}>
      <input
        name="case"
        placeholder="Case tags"
        onKeyDown={(e) => onEnterPressedTags(e)}
        autoComplete="off"
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
