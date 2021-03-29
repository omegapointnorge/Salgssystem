import styles from "./DndColumns.module.css";
import { useState, useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import Column from "./../Column/Column";
import * as CaseService from "../../../services/CaseService";
import { SalgsCase } from "../../../graphql/API";
import { initialColumns } from "../../../constants/DndColumns";
import { IColumn } from "../../../common/types";
import Item from "../Item/Item";
import CaseCard from "../../CaseCard/CaseCard";
import {
  useCreateCaseSubscription,
  useUpdateCaseSubscription,
  useMoveCaseSubscription,
  useDeleteCaseSubscription,
} from "../../../hooks/CaseSubscription";
import useColumnReducer from "../../../hooks/useColumnReducer";

function DndColumns() {
  const [loading, setLoading] = useState(false);
  const [
    columns,
    {
      addSalgsCase,
      updateSalgsCase,
      moveSalgsCase,
      deleteSalgsCase,
      loadSalgsCases,
    },
  ] = useColumnReducer(initialColumns);

  useCreateCaseSubscription((caseObject: SalgsCase) => {
    const canCreateCaseCard = !Object.keys(columns).some((key) => {
      const column: IColumn = columns[key];
      return column.list.some((co) => co.id === caseObject.id);
    });

    if (canCreateCaseCard) {
      addSalgsCase(caseObject);
    }
  });

  useUpdateCaseSubscription((caseObject: SalgsCase) => {
    updateSalgsCase(caseObject);
  });

  useMoveCaseSubscription((caseObject: SalgsCase) => {
    let fromId: string = "";
    let fromIndex: number = -1;
    let noChange = false;

    Object.keys(columns).forEach((key) => {
      const column: IColumn = columns[key];
      column.list.forEach((co, i) => {
        if (co.id === caseObject.id) {
          fromId = key;
          fromIndex = i;
          noChange = co.status === caseObject.status;
        }
      });
    });

    const canMoveCaseCard =
      !noChange && !(fromId === "") && !(fromIndex === -1);
    if (canMoveCaseCard) {
      moveSalgsCase({
        from: { id: fromId, index: fromIndex },
        to: { id: caseObject.status!, index: 0 },
      });
    }
  });

  useDeleteCaseSubscription((caseObject: SalgsCase) => {
    deleteSalgsCase(caseObject);
  });

  useEffect(() => {
    const fetchCases = async () => {
      try {
        setLoading(true);
        const result = await CaseService.listCases();
        loadSalgsCases(result || []);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSlettSalgsCase = (caseObject: SalgsCase) => {
    deleteSalgsCase(caseObject);
    CaseService.deleteCase(caseObject);
  };

  const handleEditSalgsCase = (caseObject: SalgsCase) => {
    updateSalgsCase(caseObject);
    CaseService.updateCase(caseObject);
  };

  const handleAddSalgsCase = async () => {
    try {
      const newCaseObject = await CaseService.createCase();
      addSalgsCase(newCaseObject!);
    } catch (error) {
      console.error("Noe gikk galt ved oppretting av et ny SalgsCase", error);
    }
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

    moveSalgsCase({
      from: { id: source.droppableId, index: source.index },
      to: { id: destination.droppableId, index: destination.index },
    });

    if (source.droppableId !== destination.droppableId) {
      CaseService.moveCase(caseObject);
    }
  };

  if (!!!loading) {
    return (
      <div className={styles.dndColumns}>
        <button onClick={handleAddSalgsCase}>
          <span className={styles.addCardButton}>&#43;</span>
        </button>
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
          <div className={styles.kolonner}>
            {Object.values(columns).map((col: IColumn) => (
              <Column colId={col.id} key={col.id}>
                {col.list.map((caseObject: SalgsCase, index: number) => (
                  <Item
                    key={caseObject.id}
                    caseObject={caseObject}
                    index={index}
                  >
                    <CaseCard
                      caseObject={caseObject}
                      slettCase={handleSlettSalgsCase}
                      editCase={handleEditSalgsCase}
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
