import React/*, { useState }*/ from "react";
import { Draggable } from "react-beautiful-dnd";
import Case from "../../../models/Case";
import CaseCard from "../../CaseCard/CaseCard";
import styles from "./Item.module.css";

interface ItemProps {
  caseObject: Case;
  index: number;
  slettCase: (caseObject: Case) => void;
}

const Item: React.FC<ItemProps> = ({ caseObject, index, slettCase }) => {
  // const [isDragDisabled, setIsDragDisabled] = useState(caseObject.isInvalid());

  return (
    <Draggable draggableId={caseObject.ID} index={index} /*isDragDisabled={isDragDisabled}*/>
      {(provided) => (
        <div
          className={styles.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CaseCard caseObject={caseObject} slettCase={slettCase} />
        </div>
      )}
    </Draggable>
  );
};

export default Item;
