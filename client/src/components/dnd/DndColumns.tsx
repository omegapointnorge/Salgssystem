import React, { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { styled } from "../../stiches.config";
import Column from "./Column";
import * as CaseService from "../../services/CaseService";
import Case from "../../models/Case";
import Status from "../../constants/Status";
import styles from "./DndColumns.module.css";

const StyledColumns = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  margin: "1vh auto",
  width: "100%",
  height: "80vh",
  gap: "8px",
});

interface Icolumn {
  id: string;
  list: Case[];
}

interface IcolumnList {
  Unassigned: Icolumn;
  Påbegynt: Icolumn;
  Vunnet: Icolumn;
  Tapt: Icolumn;
}

function DndColumns() {
  const initialColumns: IcolumnList = {
    Unassigned: {
      id: "Unassigned",
      list: [],
    },
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
  const [columns, setColumns] = useState<IcolumnList>(initialColumns);

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    let result = await CaseService.getCases();
    // let mappedResult = result.map((caseObject: any) => ({
    //   ...caseObject,
    //   dato: new Date(caseObject.dato),
    // }));
    let columnsCopy: IcolumnList = { ...columns };

    result.forEach((caseObject: Case) =>
      columnsCopy[caseObject.status].list.push(caseObject)
    );
    setColumns(columnsCopy);
  };

  const handleAddCaseClick = () => {
    const columnsCopy: IcolumnList = {...columns};

    columnsCopy.Unassigned.list.push(new Case());
    setColumns(columnsCopy);
  }

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
      // Kjører om caseKort ender opp i en annen kolonne enn opprinnelig:
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
      // Lagre oppdatert posisjon av caseKort i database:
      const caseObject: Case = start.list[source.index];
      caseObject["status"] =
        Status[end.id.toUpperCase() as keyof typeof Status];
      CaseService.saveCase(caseObject);
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      }));
      return null;
    }
  };


  return (
    <div>
      <button onClick={handleAddCaseClick}>
        <span className={styles.addCardButton}>&#43;</span>
      </button>
      <DragDropContext onDragEnd={onDragEnd}>
        <StyledColumns>
          {Object.values(columns).map((col) => (
            <Column col={col} key={col.id} />
          ))}
        </StyledColumns>
      </DragDropContext>
    </div>
  );
}

export default DndColumns;
