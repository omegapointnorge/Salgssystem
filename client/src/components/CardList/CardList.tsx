import React, { useEffect, useState } from "react";
import * as CaseService from "../../services/CaseService";
import CaseCard from "../CaseCard/CaseCard";
import styles from "./CardList.module.css";
import Case from "../../models/Case";

const CardList = () => {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    let result = await CaseService.getCases();
    let mappedResult = result.map((caseObject: Case) => ({
      ...caseObject,
      dato: new Date(caseObject.dato),
    }));
    setCases(mappedResult);
  };

  const handleAddCaseClick = () => {
    setCases([new Case(), ...cases]);
  };

  const deleteCase = async (deleteCase: Case) => {
    await CaseService.deleteCase(
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
            deleteCase={(caseObject: Case) => deleteCase(caseObject)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
