import { v4 as uuid } from "uuid";
import Status from "../constants/Status";

class Case {
  ID: string;
  ansvarlig: string;
  caseTags: string[];
  dato: Date;
  frist: Date | null;
  kontakt: string;
  kunde: string;
  profilert: string[];
  status: Status;
  constructor({
    ID = uuid(),
    ansvarlig = "",
    caseTags = [],
    dato = new Date(),
    frist = null,
    kontakt = "",
    kunde = "",
    profilert = [],
    status = Status.UNASSIGNED,
  } = {}) {
    this.ID = ID;
    this.ansvarlig = ansvarlig;
    this.caseTags = caseTags;
    this.dato = new Date(dato);
    this.frist = frist;
    this.kontakt = kontakt;
    this.kunde = kunde;
    this.profilert = profilert;
    this.status = status;
  }

  isInvalid(): boolean {
    return (
      this.status === Status.UNASSIGNED &&
      (// this.ansvarlig === "" ||
      this.kontakt === "" ||
        // this.kunde === "" ||
        this.caseTags.length === 0 ||
        this.profilert.length === 0)
    );
  }
}

export default Case;
