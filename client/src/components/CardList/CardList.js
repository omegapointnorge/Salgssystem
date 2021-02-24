import * as CaseService from "../../services/CaseService";
import { useEffect, useState } from "react";
import CaseCard from "../CaseCard/CaseCard";
import styles from "./CardList.module.css";

const CardList = (props) => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      let result = await CaseService.getCases();
      setCases(result);
    };
    fetchCases();
  }, []);

  const onClick = () => {
    setCases([null, ...cases]);
  };

  return (
    <div>
      <button onClick={onClick}>
        <span className={styles.addCardButton}>&#43;</span>
      </button>
      <div className={styles.cardList}>
        {cases.map((caseObject, i) => (
          <CaseCard
            caseObject={caseObject}
            key={caseObject?.ID || i}
            saveCase={CaseService.createCase}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
