import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import styles from "./DoubleClickEditTextarea.module.css";

interface DoubleClickEditTextareaProps {
  value: string;
  placeholder?: string;
  laast: boolean | null |undefined;
  handleTextareaChange: (value: string) => void;
}

const DoubleClickEditTextarea: React.FC<DoubleClickEditTextareaProps> = ({
  value,
  placeholder = "",
  laast,
  handleTextareaChange,
}) => {
  const [state, setState] = useState(value);
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [isLaast, setLaast] = useState(laast);

  useEffect(() => {
    setLaast(laast)
  }, [laast]);

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
      disabled={isLaast ? true : false} /* Stygt, men fungerte ikke å bare ha isLaast :| */
    />
  );
};

export default DoubleClickEditTextarea;
