import { Reducer } from "react";
import { IColumnList, Action, ColumnsAction } from "../../../common/types";
import Status from "../../../constants/Status";
import Case from "../../../models/Case";

const dndColumnsReducer: Reducer<IColumnList, Action> = (
  columns,
  action
) => {
  switch (action.type) {
    case ColumnsAction.MOVE: {
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
        caseObject.status = Status[to.id.toUpperCase() as keyof typeof Status];

        return {
          ...columns,
          [from.id]: { id: from.id, list: fromList },
          [to.id]: { id: to.id, list: toList },
        };
      }
    }
    case ColumnsAction.ADD: {
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
    case ColumnsAction.DELETE: {
      let { caseObject } = action.payload;
      let newList = columns[caseObject.status].list.filter(
        (co: Case) => co.ID !== caseObject.ID
      );

      return {
        ...columns,
        [caseObject.status]: { id: caseObject.status, list: newList },
      };
    }
    case ColumnsAction.EDIT: {
      let { caseObject } = action.payload;

      let newList = columns[caseObject.status].list.map((co: Case) =>
        co.ID === caseObject.ID ? caseObject : co
      );

      return {
        ...columns,
        [caseObject.status]: { id: caseObject.status, list: newList },
      };
    }
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
};

export default dndColumnsReducer;
