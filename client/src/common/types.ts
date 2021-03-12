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
  // export?
  id: string;
  list: Case[];
}

export interface IColumnList {
  Unassigned: IColumn;
  Påbegynt: IColumn;
  Vunnet: IColumn;
  Tapt: IColumn;
}

export interface IcontextMenuItem {
  id: number | 0;
  name: string;
  callback: () => void;
}

export enum Action {
  MOVE,
  ADD,
  DELETE,
  EDIT,
}

export type ColumnsAction = {
  type: Action;
  payload?: any;
};

export interface CountState {
  value: number;
}
