import React from "react";
import { Draggable } from "react-beautiful-dnd";
// import { styled } from "src/stiches.config";
import CaseCard from "../CaseCard/CaseCard";

interface ItemProps {
  caseObject: any;
  index: number;
}

// const StyledItem = styled("div", {
//   backgroundColor: "#eee",
//   borderRadius: 4,
//   padding: "4px 8px",
//   transition: "background-color .8s ease-out",
//   marginTop: 8,

//   ":hover": {
//     backgroundColor: "#fff",
//     transition: "background-color .1s ease-in",
//   },
// });

// const NEW_CASE = () => ({
//   ID: "uuid()",
//   ansvarlig: "",
//   caseTags: [],
//   dato: new Date(),
//   frist: null,
//   kontakt: "",
//   kunde: "",
//   profilert: [],
//   status: null
// });

const Item: React.FC<ItemProps> = ({ caseObject, index }) => {
  return (
    <Draggable draggableId={caseObject.ID} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CaseCard caseObject={caseObject} saveCase={() => {}} deleteCase={() => {}} />
          {/* <StyledItem>{text}</StyledItem> */}
        </div>
      )}
    </Draggable>
  );
};

export default Item;
