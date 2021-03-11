import { Reducer } from "react";
import { IColumnList, Action, ColumnsAction } from "../../../common/types";
import Status from "../../../constants/Status";
import Case from "../../../models/Case";

const dndColumnsReducer: Reducer<IColumnList, ColumnsAction> = (
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
      let { from, caseObject } = action.payload;
      let newList = columns[from.id].list.filter(
        (co: Case) => co.ID !== caseObject.ID
      );

      return {
        ...columns,
        [from.id]: { id: from.id, list: newList },
      };
    }
    case Action.EDIT: {
      let { from, caseObject } = action.payload;

      let newList = columns[from.id].list.map((co: Case) =>
        co.ID === caseObject.ID ? caseObject : co
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

export default dndColumnsReducer;
