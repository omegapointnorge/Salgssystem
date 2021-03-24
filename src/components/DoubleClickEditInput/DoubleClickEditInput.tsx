import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import ClickOutsideWrapper from "../ClickOutsideWrapper/ClickOutsideWrapper";
import styles from "./DoubleClickEditInput.module.css";

interface DoubleClickEditInputProps {
  value: string;
  placeholder?: string;
  handleInputChange: (value: string) => void;
}

const DoubleClickEditInput: React.FC<DoubleClickEditInputProps> = ({
  value,
  placeholder = "",
  handleInputChange,
}) => {
  const [state, setState] = useState(value);
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editMode) {
      inputRef.current?.focus();
    }
  }, [editMode]);

  const handleEdit = () => {
    if (value !== state) {
      handleInputChange(state);
    }
    setEditMode(false);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(event.currentTarget.value);
  };

  return (
    <div>
      {editMode ? (
        <ClickOutsideWrapper onClickOutside={() => setEditMode(false)}>
          <input
            className={styles.input}
            ref={inputRef}
            value={state}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleEdit();
            }}
            onBlur={handleEdit}
            autoComplete="off"
          />
        </ClickOutsideWrapper>
      ) : (
        <div className={value ? styles.display : [styles.display, styles.placeholder].join(" ")} onDoubleClick={() => setEditMode(true)}>{value || placeholder}</div>
      )}
    </div>
  );
};

export default DoubleClickEditInput;
