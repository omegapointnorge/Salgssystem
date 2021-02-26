import React, { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { styled } from "../../stiches.config";
import Column from "./Column";
import * as CaseService from "../../services/CaseService";

const StyledColumns = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  margin: "10vh auto",
  width: "80%",
  height: "80vh",
  gap: "8px",
});

function DndColumns() {
  const initialColumns = {
    Påbegynt: {
      id: "Påbegynt",
      list: [],
    },
    Vunnet: {
      id: "Vunnet",
      list: [],
    },
    Tapt: {
      id: "Tapt",
      list: [],
    },
  };
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    let result = await CaseService.getCases();
    let mappedResult = result.map((caseObject: any) => ({
      ...caseObject,
      dato: new Date(caseObject.dato),
    }));
    let copy = {...columns};
    copy["Påbegynt"].list = mappedResult;
    setColumns(copy);
  };

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (destination === undefined || destination === null) return null;
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) {
      return null;
    }
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    if (start === end) {
      const newList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );
      newList.splice(destination.index, 0, start.list[source.index]);
      const newCol = {
        id: start.id,
        list: newList,
      };
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;
    } else {
      const newStartList = start.list.filter(
        (_: any, idx: number) => idx !== source.index
      );
      const newStartCol = {
        id: start.id,
        list: newStartList,
      };
      const newEndList = end.list;
      newEndList.splice(destination.index, 0, start.list[source.index]);
      const newEndCol = {
        id: end.id,
        list: newEndList,
      };
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StyledColumns>
        {Object.values(columns).map((col) => (
          <Column col={col} key={col.id} />
        ))}
      </StyledColumns>
    </DragDropContext>
  );
}

export default DndColumns;
