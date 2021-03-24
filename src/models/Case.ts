import { v4 as uuid } from "uuid";
import Status from "../constants/Status";

class Case {
  id: string;
  ansvarlig: string;
  caseTags: string[];
  createdAt: Date;
  frist: Date | null;
  kontakt: string;
  kunde: string;
  profilert: string[];
  status: Status;
  constructor({
    id = uuid(),
    ansvarlig = "",
    caseTags = [] as string[],
    createdAt = new Date(),
    frist = null,
    kontakt = "",
    kunde = "",
    profilert = [],
    status = Status.UNASSIGNED,
  } = {}) {
    this.id = id;
    this.ansvarlig = ansvarlig;
    this.caseTags = caseTags;
    this.createdAt = new Date(createdAt);
    this.frist = frist;
    this.kontakt = kontakt;
    this.kunde = kunde;
    this.profilert = profilert;
    this.status = status;
  }
}

export default Case;
