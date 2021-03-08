/**
 * Types (e.g. enums) & constants :)
 */

import Case from "../models/Case";


export const errors = {
  CALLED_WHEN_NO_ACTIVE_PROJECT_FOR_FILE_PATH: "A query *that needs an active project* was made when there is no active project for given filePath",
  CALLED_WHEN_NO_ACTIVE_PROJECT_GLOBAL: "A query *that needs an active project* was made when there is no active project"
}


export interface Icolumn { // export?
  id: string;
  list: Case[];
}

export interface IcolumnList {
  Unassigned: Icolumn;
  Påbegynt: Icolumn;
  Vunnet: Icolumn;
  Tapt: Icolumn;
}

export interface IcontextMenuItem {
  id: number;
  name: string;
  callback: () => void;
}