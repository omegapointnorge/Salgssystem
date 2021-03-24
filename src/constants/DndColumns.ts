import { IColumnList } from "../common/types";
import { Status } from "../graphql/API";

export const initialColumns: IColumnList = {
  Unassigned: {
    id: Status.UNASSIGNED,
    list: [],
  },
  Påbegynt: {
    id: Status.PABEGYNT,
    list: [],
  },
  Vunnet: {
    id: Status.VUNNET,
    list: [],
  },
  Tapt: {
    id: Status.TAPT,
    list: [],
  },
};