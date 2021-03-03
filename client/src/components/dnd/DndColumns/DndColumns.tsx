import React, { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./../Column/Column";
import * as CaseService from "../../../services/CaseService";
import Case from "../../../models/Case";
import Status from "../../../constants/Status";
import styles from "./DndColumns.module.css";

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

  const slettCase = (kolonneId: Status, kortId:string) => {
    let columnsCopy: IcolumnList = { ...columns };
    columnsCopy[kolonneId].list =columnsCopy[kolonneId].list.filter((card: Case) => card.ID !== kortId);
    setColumns(columnsCopy);
  }

  const fetchCases = async () => {
    let result = await CaseService.getCases();
    let columnsCopy: IcolumnList = { ...columns };

    result.forEach((caseObject: Case) =>
      columnsCopy[caseObject.status].list.push(caseObject)
    );
    setColumns(columnsCopy);
  };

  

  // const markup = useCallback(
  //   (count) => {
  //     const stringCountCorrection = count + 1;
  //     return (
  //       // Some markup that references the sections prop
  //     );
  //   },
  //   [count, /* and any other dependencies the react linter suggests */]
  // );

  const handleAddCaseClick = () => {
    const columnsCopy: IcolumnList = {...columns};

    columnsCopy.Unassigned.list.push(new Case());
    setColumns(columnsCopy);
  }

  const onDragStart = () => {
    try {
      (document.activeElement as HTMLElement).blur();
    } catch {
      console.log("Kunne ikke kjøre blur() på gitt element");
    }
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
    <div className={styles.dndColumns}>
      <button onClick={handleAddCaseClick}>
        <span className={styles.addCardButton}>&#43;</span>
      </button>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        <div className={styles.kolonner}>
          {Object.values(columns).map((col) => (
            <Column col={col} key={col.id} slettCase={slettCase} />
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default DndColumns;
