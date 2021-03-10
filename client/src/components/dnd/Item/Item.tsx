import React /*, { useState }*/ from "react";
import { Draggable } from "react-beautiful-dnd";
import Case from "../../../models/Case";
import styles from "./Item.module.css";

interface ItemProps {
  caseObject: Case;
  index: number;
}

const Item: React.FC<ItemProps> = (props) => {
  const { caseObject, index } = props;
  // const [isDragDisabled, setIsDragDisabled] = useState(caseObject.isInvalid());

  return (
    <Draggable
      draggableId={caseObject.ID}
      index={index} /*isDragDisabled={isDragDisabled}*/
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
