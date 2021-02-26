import styles from "./TagContainer.module.css";
import CaseTag from "../CaseTag/CaseTag";

const TagContainer = ({ caseTags = [], onChangeTags }) => {
  const onEnterPressedTags = (event) => {
    if (event.key === "Enter" && event.target.value?.length > 0) {
      onChangeTags([...caseTags, event.target.value]);
      event.target.value = "";
    }
  };

  const onClickTag = (index) => {
    const newTags = [...caseTags].filter((_, i) => i !== index);
    onChangeTags(newTags);
  };
  return (
    <div className={styles.tagContainer}>
      <input
        name="case"
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
