import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Status from "../../../constants/Status";
import Case from "../../../models/Case";
import styles from "./Item.module.css";

interface ItemProps {
  caseObject: Case;
  index: number;
}



const isInvalid = (caseObject: Case): boolean => {
  return (
    caseObject.status === Status.UNASSIGNED && // this.ansvarlig === "" ||
    (caseObject.kontakt === "" ||
      // this.kunde === "" ||
      caseObject.caseTags.length === 0 ||
      caseObject.profilert.length === 0)
  );
}

const Item: React.FC<ItemProps> = (props) => {
  const { caseObject, index } = props;
  
  return (
    <Draggable
      draggableId={caseObject.id}
      index={index}
      isDragDisabled={isInvalid(caseObject)}
    >
      {(provided) => (
        <div
          className={styles.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {props.children}
        </div>
      )}
    </Draggable>
  );
};

export default Item;
