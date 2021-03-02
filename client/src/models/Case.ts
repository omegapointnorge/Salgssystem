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
  constructor() {
    this.ID = uuid();
    this.ansvarlig = "";
    this.caseTags = [];
    this.dato = new Date();
    this.frist = null;
    this.kontakt = "";
    this.kunde = "";
    this.profilert = [];
    this.status = Status.PÅBEGYNT;
  }
}

export default Case;
