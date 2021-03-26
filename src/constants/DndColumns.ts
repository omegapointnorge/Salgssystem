import { IColumnList } from "../common/types";
import { Status } from "../graphql/API";

export const initialColumns: IColumnList = {
  UNASSIGNED: {
    id: Status.UNASSIGNED,
    list: [],
  },
  PABEGYNT: {
    id: Status.PABEGYNT,
    list: [],
  },
  VUNNET: {
    id: Status.VUNNET,
    list: [],
  },
  TAPT: {
    id: Status.TAPT,
    list: [],
  },
};