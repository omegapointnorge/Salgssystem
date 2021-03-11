import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styles from "./Column.module.css";

interface ColumnProps {
  colId: string;
}

const Column: React.FC<ColumnProps> = (props) => {
  const { colId } = props;
  return (
    <Droppable droppableId={colId}>
      {(provided) => (
        <div className={styles.kolonne}>
          <h2 className={styles.header}>{colId}</h2>
          <div
            className={styles.content}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.children}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default Column;
