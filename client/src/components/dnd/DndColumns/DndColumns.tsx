import React, { useState, useEffect, useReducer, Reducer } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./../Column/Column";
import * as CaseService from "../../../services/CaseService";
import Case from "../../../models/Case";
import Status from "../../../constants/Status";
import styles from "./DndColumns.module.css";
import { initialColumns } from "../../../constants/DndColumns";
import { IColumnList } from "../../../common/types";

enum Action {
  MOVE,
  ADD,
  DELETE,
}

type ColumnsAction = {
  type: Action;
  payload?: any;
};

const columnsReducer: Reducer<IColumnList, ColumnsAction> = (
  columns,
  action
) => {
  switch (action.type) {
    case Action.MOVE: {
      let { from, to } = action.payload;

      if (from.id === to.id) {
        //Flytt til ny index i samme kolonne
        let fromList = [...columns[from.id].list];
        fromList.splice(to.index, 0, fromList.splice(from.index, 1)[0]);
        return { ...columns, [from.id]: { id: from.id, list: fromList } };
      } else {
        //Flytt til ny index i ny kolonne
        let fromList = [...columns[from.id].list];
        let toList = [...columns[to.id].list];

        let caseObject = fromList.splice(from.index, 1)[0];
        toList.splice(to.index, 0, caseObject);

        //Lagre ny status i database
        caseObject.status = Status[to.id.toUpperCase()];
        CaseService.saveCase(caseObject);

        return {
          ...columns,
          [from.id]: { id: from.id, list: fromList },
          [to.id]: { id: to.id, list: toList },
        };
      }
    }
    case Action.ADD: {
      let { cases } = action.payload;

      let columnsCopy = Object.values(columns)
        .map((col) => ({ ...col, list: [...col.list] }))
        .reduce((acc, col) => {
          acc[col.id] = col;
          return acc;
        }, {});

      cases.forEach((caseObject: Case) =>
        columnsCopy[caseObject.status].list.push(caseObject)
      );

      return columnsCopy;
    }
    case Action.DELETE: {
      let { from, cases } = action.payload;

      let caseIds = cases.map((caseObject: Case) => caseObject.ID);
      let newList = columns[from.id].list.filter(
        (caseObject: Case) => !caseIds.includes(caseObject.ID)
      );

      return {
        ...columns,
        [from.id]: { id: from.id, list: newList },
      };
    }
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
};

function DndColumns() {
  const [loading, setLoading] = useState(false);
  const [columns, columnDispatcher] = useReducer<
    Reducer<IColumnList, ColumnsAction>
  >(columnsReducer, initialColumns);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        setLoading(true);
        const result = await CaseService.getCases();
        columnDispatcher({ type: Action.ADD, payload: { cases: result } });
      } catch (e) {
        console.error(
          "Det skjedde en feil i henting av data fra databasen: ",
          e
        );
      } finally {
        setLoading(false);
      }
    };

    if (!columns || columns === initialColumns) fetchCases();
  }, [columns]);

  const slettCase = (caseObject: Case) => {
    columnDispatcher({
      type: Action.DELETE,
      payload: {
        from: { id: caseObject.status.toString() },
        cases: [caseObject],
      },
    });
  };

  const handleAddCaseClick = () => {
    columnDispatcher({ type: Action.ADD, payload: { cases: [new Case()] } });
  };

  const onDragStart = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  const onDragEnd = ({ source, destination }: DropResult) => {
    // Sjekk om CaseCard har flyttet seg
    if (destination === undefined || destination === null) return null;
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    ) {
      return null;
    }

    columnDispatcher({
      type: Action.MOVE,
      payload: {
        from: { id: source.droppableId, index: source.index },
        to: { id: destination.droppableId, index: destination.index },
      },
    });
  };

  if (!!!loading) {
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
  } else {
    return <div className={styles.dndColumnsLoading}>LOADING...</div>;
  }
}

export default DndColumns;
