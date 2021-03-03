import { v4 as uuid } from "uuid";
import Status from "../constants/Status";
import * as CaseService from "../services/CaseService"

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

  async deleteCase () {
    await CaseService.deleteCase(
      this.ID,
      this.dato
    );
  };

  async saveCase (caseObject: Case) {
    await CaseService.saveCase(
      caseObject
    );
    Object.assign(this, caseObject);
  };
}

export default Case;
