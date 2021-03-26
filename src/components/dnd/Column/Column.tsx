import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Status } from "../../../graphql/API";
import styles from "./Column.module.css";

interface ColumnProps {
  colId: Status;
}

const headerMapper = (id: Status) => {
  if(id === Status.PABEGYNT) {
    return "PÅBEGYNT";
  }
  return id;
}

const Column: React.FC<ColumnProps> = (props) => {
  const { colId } = props;
  return (
    <Droppable droppableId={colId}>
      {(provided) => (
        <div className={styles.kolonne}>
          <h2 className={styles.header}>{headerMapper(colId)}</h2>
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
