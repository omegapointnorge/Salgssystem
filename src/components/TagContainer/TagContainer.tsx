import styles from "./TagContainer.module.css";
import CaseTag from "../CaseTag/CaseTag";
import React, { KeyboardEvent, useState, useRef, useEffect } from "react";

interface TagContainerProps {
  caseTags: string[];
  placeholder?: string;
  laast: boolean | null | undefined;
  onChangeTags: (caseTags: string[]) => void;
}

const TagContainer: React.FC<TagContainerProps> = ({
  caseTags = [],
  placeholder = "",
  laast,
  onChangeTags,
}) => {
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [isLaast, setLaast] = useState(laast);

  useEffect(() => {
    setLaast(laast)
  }, [laast]);

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
    }
  }, [editMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!editMode) return;

      if (!containerRef.current?.contains(event.target as Node) && !isLaast) {
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
    if (event.key === "Enter" && !isLaast) {
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
      onDoubleClick={() => {
        if(!isLaast)
          setEditMode(true)
      }}
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
          disabled={isLaast ? true : false} /* Stygt, men fungerte ikke å bare ha isLaast :| */
        />
      ) : null}
      <div className={styles.tags}>
        {caseTags.length !== 0 ? (
          caseTags.map((tag, i) => (
            <CaseTag
              key={i}
              onClickHandler={() => {
                if (editMode && !isLaast) {
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
