import Case from "../models/Case";

interface Icolumn {
  id: string;
  list: Case[];
}

interface IcolumnList {
  Unassigned: Icolumn;
  Påbegynt: Icolumn;
  Vunnet: Icolumn;
  Tapt: Icolumn;
}

export const initialColumns: IcolumnList = {
  Unassigned: {
    id: "Unassigned",
    list: [],
  },
  Påbegynt: {
    id: "Påbegynt",
    list: [],
  },
  Vunnet: {
    id: "Vunnet",
    list: [],
  },
  Tapt: {
    id: "Tapt",
    list: [],
  },
};