import { useReducer, Reducer } from "react";
import { Action, ColumnsAction, IColumnList } from "../common/types";
import dndColumnsReducer from "../components/dnd/DndColumns/DndColumnsReducer";
import { SalgsCase } from "../graphql/API";

type ColumnReducer = [
  columns: IColumnList,
  actions: {
    addSalgsCase: (caseObject: SalgsCase) => void;
    updateSalgsCase: (caseObject: SalgsCase) => void;
    moveSalgsCase: ({
      from,
      to,
    }: {
      from: {
        id: string;
        index: number;
      };
      to: {
        id: string;
        index: number;
      };
    }) => void;
    deleteSalgsCase: (caseObject: SalgsCase) => void;
    loadSalgsCases: (cases: SalgsCase[]) => void;
  }
];

const useColumnReducer = (initialColumns: IColumnList): ColumnReducer => {
  const [columns, columnDispatcher] = useReducer<Reducer<IColumnList, Action>>(
    dndColumnsReducer,
    initialColumns
  );

  const addSalgsCase = (caseObject: SalgsCase) => {
    columnDispatcher({
      type: ColumnsAction.ADD,
      payload: { cases: [caseObject] },
    });
  };
  const updateSalgsCase = (caseObject: SalgsCase) => {
    columnDispatcher({
      type: ColumnsAction.EDIT,
      payload: {
        caseObject: { ...caseObject },
      },
    });
  };
  const moveSalgsCase = ({
    from,
    to,
  }: {
    from: {
      id: string;
      index: number;
    };
    to: {
      id: string;
      index: number;
    };
  }) => {
    columnDispatcher({
      type: ColumnsAction.MOVE,
      payload: {
        from: from,
        to: to,
      },
    });
  };
  const deleteSalgsCase = (caseObject: SalgsCase) => {
    columnDispatcher({
      type: ColumnsAction.DELETE,
      payload: {
        caseObject: caseObject,
      },
    });
  };
  const loadSalgsCases = (cases: SalgsCase[]) => {
    columnDispatcher({
      type: ColumnsAction.LOAD,
      payload: { cases: cases },
    });
  };

  return [
    columns,
    {
      addSalgsCase,
      updateSalgsCase,
      moveSalgsCase,
      deleteSalgsCase,
      loadSalgsCases,
    },
  ];
};

export default useColumnReducer;
