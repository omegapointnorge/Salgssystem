import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { SalgsCase, Status } from "../../../graphql/API";
import styles from "./Item.module.css";

interface ItemProps {
  caseObject: SalgsCase;
  index: number;
}

const isInvalid = (caseObject: SalgsCase): boolean => {
  const isStatusUnassigned = caseObject.status === Status.UNASSIGNED;
  const isKontaktInvalid = !!!caseObject.kontakt;
  const isLaast = caseObject.laast ? true : false;
  // const isAnsvarligInvalid = !!!caseObject.ansvarlig;
  // const isKundeInvalid = !!!caseObject.kunde;
  const isCaseTagsInvalid =
    !caseObject.caseTags || caseObject.caseTags!.length === 0;
  const isProfilertInvalid =
    !caseObject.profilert || caseObject.profilert!.length === 0;

  return (
    isLaast ||
    (isStatusUnassigned && 
      (isKontaktInvalid || isCaseTagsInvalid || isProfilertInvalid)
      )
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
