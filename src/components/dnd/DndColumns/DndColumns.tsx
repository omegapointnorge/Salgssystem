import styles from "./DndColumns.module.css";
import { useState, useEffect, useReducer, Reducer } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./../Column/Column";
import * as CaseService from "../../../services/CaseService";
import Case from "../../../models/Case";
import { initialColumns } from "../../../constants/DndColumns";
import {
  ColumnsAction,
  IColumnList,
  Action,
  IColumn,
} from "../../../common/types";
import Item from "../Item/Item";
import CaseCard from "../../CaseCard/CaseCard";
import dndColumnsReducer from "./DndColumnsReducer";
import {
  useCreateCaseSubscription,
  useUpdateCaseSubscription,
  useMoveCaseSubscription,
  useDeleteCaseSubscription,
} from "../../../hooks/CaseSubscription";

function DndColumns() {
  const [loading, setLoading] = useState(false);
  const [columns, columnDispatcher] = useReducer<Reducer<IColumnList, Action>>(
    dndColumnsReducer,
    initialColumns
  );

  useCreateCaseSubscription((caseObject: Case) => {
    const canCreateCaseCard = !Object.keys(columns).some((key) => {
      const column: IColumn = columns[key];
      return column.list.some((co) => co.ID === caseObject.ID);
    });

    if (canCreateCaseCard) {
      columnDispatcher({
        type: ColumnsAction.ADD,
        payload: {
          cases: [caseObject],
        },
      });
    }
  });

  useUpdateCaseSubscription((caseObject: Case) => {
    columnDispatcher({
      type: ColumnsAction.EDIT,
      payload: {
        caseObject: caseObject,
      },
    });
  });

  useMoveCaseSubscription((caseObject: Case) => {
    let fromId: string = "";
    let fromIndex: number = -1;
    let noChange = false;

    Object.keys(columns).forEach((key) => {
      const column: IColumn = columns[key];
      column.list.forEach((co, i) => {
        if (co.ID === caseObject.ID) {
          fromId = key;
          fromIndex = i;
          noChange = co.status === caseObject.status;
        }
      });
    });

    const canMoveCaseCard =
      !noChange && !(fromId === "") && !(fromIndex === -1);
    if (canMoveCaseCard) {
      columnDispatcher({
        type: ColumnsAction.MOVE,
        payload: {
          from: { id: fromId, index: fromIndex },
          to: { id: caseObject.status, index: 0 },
        },
      });
    }
  });

  useDeleteCaseSubscription((caseObject: Case) => {
    columnDispatcher({
      type: ColumnsAction.DELETE,
      payload: {
        caseObject: caseObject,
      },
    });
  });

  useEffect(() => {
    const fetchCases = async () => {
      try {
        setLoading(true);
        const result = await CaseService.listCases();
        columnDispatcher({
          type: ColumnsAction.LOAD,
          payload: { cases: result },
        });
      } catch (e) {
        console.error(
          "Det skjedde en feil i henting av data fra databasen: ",
          e
        );
      } finally {
        setLoading(false);
      }
    };
    fetchCases();
  }, []);

  const slettCase = (caseObject: Case) => {
    columnDispatcher({
      type: ColumnsAction.DELETE,
      payload: {
        caseObject: caseObject,
      },
    });
    CaseService.deleteCase(caseObject);
  };

  const editCase = (caseObject: Case) => {
    columnDispatcher({
      type: ColumnsAction.EDIT,
      payload: {
        caseObject: { ...caseObject },
      },
    });
    CaseService.updateCase(caseObject);
  };

  const handleAddCaseClick = () => {
    const newCaseObject = new Case();
    columnDispatcher({
      type: ColumnsAction.ADD,
      payload: { cases: [newCaseObject] },
    });
    CaseService.createCase(newCaseObject);
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
      type: ColumnsAction.MOVE,
      payload: {
        from: { id: source.droppableId, index: source.index },
        to: { id: destination.droppableId, index: destination.index },
      },
    });

    if (source.droppableId !== destination.droppableId) {
      CaseService.moveCase(caseObject);
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
