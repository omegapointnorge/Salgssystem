import styles from "./TagContainer.module.css";
import CaseTag from "../CaseTag/CaseTag";
import React, {
  KeyboardEvent,
  useState,
  useRef,
  useEffect,
} from "react";
import ClickOutsideWrapper from "../ClickOutsideWrapper/ClickOutsideWrapper";

interface TagContainerProps {
  caseTags: string[];
  onChangeTags: (caseTags: string[]) => void;
}

const TagContainer: React.FC<TagContainerProps> = ({
  caseTags = [],
  onChangeTags,
}) => {
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
    }
  }, [editMode]);

  const onEnterPressedTags = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if(event.currentTarget.value?.length > 0) {
        onChangeTags([...caseTags, event.currentTarget.value]);
      } else {
        setEditMode(false);
      }
      event.currentTarget.value = "";
    }
  };

  const onClickTag = (index: number) => {
    const newTags = [...caseTags].filter((_, i) => i !== index);
    onChangeTags(newTags);
  };
  return (
    <div
      className={styles.tagContainer}
      onDoubleClick={() => setEditMode(true)}
    >
      <ClickOutsideWrapper onClickOutside={() => setEditMode(false)} fullSize>
        {editMode ? (
          <input
            ref={inputRef}
            name="case"
            placeholder="Case tags"
            onKeyDown={(e) => onEnterPressedTags(e)}
            autoComplete="off"
            onBlur={() => setEditMode(false)}
          />
        ) : null}
        <div className={styles.tags}>
          {caseTags.map((tag, i) => (
            <CaseTag
              key={i}
              onClickHandler={() => {
                if (editMode) onClickTag(i);
              }}
              tag={tag}
            />
          ))}
        </div>
      </ClickOutsideWrapper>
    </div>
  );
};

export default TagContainer;
