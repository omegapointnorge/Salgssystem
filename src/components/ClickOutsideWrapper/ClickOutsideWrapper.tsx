import React, { useRef, useEffect } from "react";

const useOutsideAlerter = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  onClickOutside: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        onClickOutside();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
};

interface ClickOutsideWrapperProps {
  onClickOutside: () => void;
}

const ClickOutsideWrapper: React.FC<ClickOutsideWrapperProps> = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.onClickOutside);

  return (
    <div style={{ width: "100%", height: "100%" }} ref={wrapperRef}>
      {props.children}
    </div>
  );
};

export default ClickOutsideWrapper;
