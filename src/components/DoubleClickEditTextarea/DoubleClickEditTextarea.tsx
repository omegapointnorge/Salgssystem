import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import ClickOutsideWrapper from "../ClickOutsideWrapper/ClickOutsideWrapper";
import styles from "./DoubleClickEditTextarea.module.css";

interface DoubleClickEditTextareaProps {
  value: string;
  placeholder?: string;
  handleTextareaChange: (value: string) => void;
}

const DoubleClickEditTextarea: React.FC<DoubleClickEditTextareaProps> = ({
  value,
  placeholder = "",
  handleTextareaChange,
}) => {
  const [state, setState] = useState(value);
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
    }
  }, [editMode]);

  const handleEdit = () => {
    if (value !== state) {
      handleTextareaChange(state);
    }
    setEditMode(false);
  };

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setState(event.currentTarget.value);
  };

  return (
    <div>
      {editMode ? (
        <ClickOutsideWrapper onClickOutside={() => setEditMode(false)} fullSize>
          <textarea
            className={styles.textarea}
            ref={inputRef}
            value={state}
            onChange={onChange}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) handleEdit();
            }}
            onBlur={handleEdit}
          />
        </ClickOutsideWrapper>
      ) : (
        <ul className={value ? styles.display : [styles.display, styles.placeholder].join(" ")} onDoubleClick={() => setEditMode(true)}>
          {value ? value.split("\n").map((line, i) => (
            <li key={i}>{line}</li>
          )) : placeholder}
        </ul>
      )}
    </div>
  );
};

export default DoubleClickEditTextarea;
