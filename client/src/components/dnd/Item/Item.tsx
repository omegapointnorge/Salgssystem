import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Status from "../../../constants/Status";
import CaseCard from "../../CaseCard/CaseCard";
import styles from "./Item.module.css";

interface ItemProps {
  caseObject: any;
  index: number;
  slettCase: (kolonneId: Status, kortId:string) => void
}

const Item: React.FC<ItemProps> = ({ caseObject, index, slettCase }) => {
  return (
    <Draggable draggableId={caseObject.ID} index={index}>
      {(provided) => (
        <div className={styles.item}
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
