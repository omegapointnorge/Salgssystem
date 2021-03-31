import styles from "./TagContainer.module.css";
import CaseTag from "../CaseTag/CaseTag";
import React, { KeyboardEvent, useState, useRef, useEffect } from "react";

interface TagContainerProps {
  caseTags: string[];
  placeholder?: string;
  onChangeTags: (caseTags: string[]) => void;
}

const TagContainer: React.FC<TagContainerProps> = ({
  caseTags = [],
  placeholder = "",
  onChangeTags,
}) => {
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
    }
  }, [editMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!editMode) return;

      if (!containerRef.current?.contains(event.target as Node)) {
        setInputValue("");
        setEditMode(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef, editMode]);

  const onEnterPressedTags = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (inputValue.length > 0) {
        onChangeTags([...caseTags, inputValue]);
      } else {
        setEditMode(false);
      }
      setInputValue("");
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
      ref={containerRef}
    >
      {editMode ? (
        <input
          className={styles.input}
          ref={inputRef}
          name="case"
          placeholder="Case tags"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          onKeyDown={(e) => onEnterPressedTags(e)}
          autoComplete="off"
        />
      ) : null}
      <div className={styles.tags}>
        {caseTags.length !== 0 ? (
          caseTags.map((tag, i) => (
            <CaseTag
              key={i}
              onClickHandler={() => {
                if (editMode) {
                  onClickTag(i);
                }
              }}
              tag={tag}
            />
          ))
        ) : editMode ? null : (
          <div className={styles.placeholder}>{placeholder}</div>
        )}
      </div>
    </div>
  );
};

export default TagContainer;
