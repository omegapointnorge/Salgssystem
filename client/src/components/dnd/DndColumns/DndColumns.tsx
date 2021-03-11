import React, { useState, useEffect, useReducer, Reducer } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./../Column/Column";
import * as CaseService from "../../../services/CaseService";
import Case from "../../../models/Case";
import styles from "./DndColumns.module.css";
import { initialColumns } from "../../../constants/DndColumns";
import { ColumnsAction, IColumnList, Action } from "../../../common/types";
import Item from "../Item/Item";
import CaseCard from "../../CaseCard/CaseCard";
import dndColumnsReducer from "./DndColumnsReducer";

function DndColumns() {
  const [loading, setLoading] = useState(false);
  const [columns, columnDispatcher] = useReducer<
    Reducer<IColumnList, ColumnsAction>
  >(dndColumnsReducer, initialColumns);

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
        caseObject: caseObject,
      },
    });
    CaseService.deleteCase(caseObject);
  };

  const editCase = (caseObject: Case) => {
    columnDispatcher({
      type: Action.EDIT,
      payload: {
        from: { id: caseObject.status.toString() },
        caseObject: caseObject,
      },
    });
    CaseService.saveCase(caseObject);
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

    const caseObject = columns[source.droppableId].list[source.index];

    columnDispatcher({
      type: Action.MOVE,
      payload: {
        from: { id: source.droppableId, index: source.index },
        to: { id: destination.droppableId, index: destination.index },
      },
    });

    if (source.droppableId !== destination.droppableId) {
      CaseService.saveCase(caseObject);
    }
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
              <Column colId={col.id} key={col.id}>
                {col.list.map((caseObject: Case, index: number) => (
                  <Item
                    key={caseObject.ID}
                    caseObject={caseObject}
                    index={index}
                  >
                    <CaseCard
                      caseObject={caseObject}
                      slettCase={slettCase}
                      editCase={editCase}
                    />
                  </Item>
                ))}
              </Column>
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
