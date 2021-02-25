import * as CaseService from "../../services/CaseService";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import CaseCard from "../CaseCard/CaseCard";
import styles from "./CardList.module.css";

const NEW_CASE = () => ({
  ID: uuid(),
  ansvarlig: "",
  caseTags: [],
  dato: new Date(),
  frist: null,
  kontakt: "",
  kunde: "",
  profilert: "",
});

const CardList = (props) => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    let result = await CaseService.getCases();
    let mappedResult = result.map((caseObject) => ({
      ...caseObject,
      dato: new Date(caseObject.dato),
    }));
    setCases(mappedResult);
  };

  const handleAddCaseClick = () => {
    setCases([NEW_CASE(), ...cases]);
  };

  const deleteCase = async (deleteCase) => {
    const response = await CaseService.deleteCase(
      deleteCase.ID,
      deleteCase.dato
    );

    const newCases = [...cases].filter(
      (caseObject) => caseObject !== deleteCase
    );
    setCases(newCases);
    //fetchCases();
  };

  return (
    <div>
      <button onClick={handleAddCaseClick}>
        <span className={styles.addCardButton}>&#43;</span>
      </button>
      <div className={styles.cardList}>
        {cases.map((caseObject, i) => (
          <CaseCard
            caseObject={caseObject}
            key={caseObject?.ID || i}
            saveCase={CaseService.createCase}
            deleteCase={(caseId) => deleteCase(caseId)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
