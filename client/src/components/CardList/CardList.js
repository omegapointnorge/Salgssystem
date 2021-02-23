import styles from "./CardList.module.css";
import * as CaseService from "../../services/CaseService";
import { useEffect, useState } from "react";
import CaseCard from "../CaseCard/CaseCard";

const CardList = (props) => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      let result = await CaseService.getCases();
      console.log(result);
      setCases(result);
    };
    fetchCases();
  }, []);

  return (
    <div>
        <CaseCard />
      <div>CASES: {cases}</div>
    </div>
  );
};

export default CardList;
