import { Reducer } from "react";
import { IColumnList, Action, ColumnsAction } from "../../../common/types";
import { SalgsCase, Status } from "../../../graphql/API";

const dndColumnsReducer: Reducer<IColumnList, Action> = (columns, action) => {
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

        //Sett ny status på case
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

      cases.forEach((caseObject: SalgsCase) =>
        columnsCopy[caseObject.status!].list.unshift(caseObject)
      );

      return columnsCopy;
    }
    case ColumnsAction.DELETE: {
      let { caseObject } = action.payload;
      let newList = columns[caseObject.status!].list.filter(
        (co: SalgsCase) => co.id !== caseObject.id
      );

      return {
        ...columns,
        [caseObject.status!]: { id: caseObject.status, list: newList },
      };
    }
    case ColumnsAction.EDIT: {
      let { caseObject } = action.payload;

      let newList = columns[caseObject.status!].list.map((co: SalgsCase) =>
        co.id === caseObject.id ? caseObject : co
      );

      return {
        ...columns,
        [caseObject.status!]: { id: caseObject.status, list: newList },
      };
    }
    case ColumnsAction.LOAD: {
      let { cases } = action.payload;

      if(!cases) return;

      let columnsCopy = Object.values(columns)
        .map((col) => ({ ...col, list: [...col.list] }))
        .reduce((acc, col) => {
          col.list = [];
          acc[col.id] = col;
          return acc;
        }, {});

      cases!.forEach((caseObject: SalgsCase | null) =>
        columnsCopy[caseObject!.status!].list.push(caseObject)
      );

      return columnsCopy;
    }
    default:
      throw new Error(`Unhandled action: ${action}`);
  }
};

export default dndColumnsReducer;
