/**
 * Types (e.g. enums) & constants :)
 */

import Case from "../models/Case";

export const errors = {
  CALLED_WHEN_NO_ACTIVE_PROJECT_FOR_FILE_PATH:
    "A query *that needs an active project* was made when there is no active project for given filePath",
  CALLED_WHEN_NO_ACTIVE_PROJECT_GLOBAL:
    "A query *that needs an active project* was made when there is no active project",
};

export interface IColumn {
  id: string;
  list: Case[];
}

interface IObjectStringKeys {
  [key: string]: IColumn | any;
}

export interface IColumnList extends IObjectStringKeys {
  Unassigned: IColumn;
  Påbegynt: IColumn;
  Vunnet: IColumn;
  Tapt: IColumn;
}

export interface IcontextMenuItem {
  id: number;
  name: string;
  callback: () => void;
}

export enum ColumnsAction {
  MOVE,
  ADD,
  DELETE,
  EDIT,
  LOAD,
}
interface MoveAction {
  type: ColumnsAction.MOVE;
  payload: {
    from: { id: string; index: number };
    to: { id: string; index: number };
  };
}
interface AddAction {
  type: ColumnsAction.ADD;
  payload: {
    cases: Case[];
  };
}
interface DeleteAction {
  type: ColumnsAction.DELETE;
  payload: {
    caseObject: Case;
  };
}
interface EditAction {
  type: ColumnsAction.EDIT;
  payload: {
    caseObject: Case;
  };
}
interface LoadAction {
  type: ColumnsAction.LOAD;
  payload: {
    cases: Case[];
  };
}
export type Action = MoveAction | AddAction | DeleteAction | EditAction | LoadAction;
