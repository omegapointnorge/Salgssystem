/**
 * Types (e.g. enums) & constants :)
 */

import { SalgsCase, Status } from "../graphql/API";

export const errors = {
  CALLED_WHEN_NO_ACTIVE_PROJECT_FOR_FILE_PATH:
    "A query *that needs an active project* was made when there is no active project for given filePath",
  CALLED_WHEN_NO_ACTIVE_PROJECT_GLOBAL:
    "A query *that needs an active project* was made when there is no active project",
};

export interface IColumn {
  id: Status;
  list: SalgsCase[];
}

interface IObjectStringKeys {
  [key: string]: IColumn | any;
}

export interface IColumnList extends IObjectStringKeys {
  UNASSIGNED: IColumn;
  PABEGYNT: IColumn;
  VUNNET: IColumn;
  TAPT: IColumn;
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
    cases: SalgsCase[];
  };
}
interface DeleteAction {
  type: ColumnsAction.DELETE;
  payload: {
    caseObject: SalgsCase;
  };
}
interface EditAction {
  type: ColumnsAction.EDIT;
  payload: {
    caseObject: SalgsCase;
  };
}
interface LoadAction {
  type: ColumnsAction.LOAD;
  payload: {
    cases: SalgsCase[];
  };
}
export type Action =
  | MoveAction
  | AddAction
  | DeleteAction
  | EditAction
  | LoadAction;

export interface IcontextMenuItem {
  id: number;
  name: string;
  callback: (arg0: string) => (void);
  image?: string;
  htmlElementID?: string
}
