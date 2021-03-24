import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { SalgsCase, Status } from "../../../graphql/API";
import styles from "./Item.module.css";

interface ItemProps {
  caseObject: SalgsCase;
  index: number;
}

const isInvalid = (caseObject: SalgsCase): boolean => {
  return (
    caseObject.status === Status.UNASSIGNED && // this.ansvarlig === "" ||
    (caseObject.kontakt === "" ||
      // this.kunde === "" ||
      caseObject.caseTags?.length === 0 ||
      caseObject.profilert?.length === 0)
  );
};

const Item: React.FC<ItemProps> = (props) => {
  const { caseObject, index } = props;

  return (
    <Draggable
      draggableId={caseObject.id!}
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
