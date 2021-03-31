import React, { useState, ChangeEvent, useRef, useEffect } from "react";
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
      var inputElement = inputRef.current;
      inputElement?.focus();
      inputElement?.setSelectionRange(
        inputElement.value.length,
        inputElement.value.length
      );
    }
    setState(value);
  }, [editMode, value]);

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
    <textarea
      readOnly={!editMode}
      placeholder={placeholder}
      onDoubleClick={() => setEditMode(true)}
      className={styles.textarea}
      ref={inputRef}
      value={state}
      onChange={onChange}
      onKeyDown={(event) => {
        if (event.key === "Enter" && !event.shiftKey) handleEdit();
      }}
      onBlur={handleEdit}
    />
  );
};

export default DoubleClickEditTextarea;
