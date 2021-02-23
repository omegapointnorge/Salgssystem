import * as CaseService from "../../services/CaseService";
import { useEffect, useState } from "react";
import CaseCard from "../CaseCard/CaseCard";

const CardList = (props) => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      let result = await CaseService.getCases();
      setCases(result);
    };
    fetchCases();
  }, []);

  return (
    <div>
      {cases.map((caseObject) => (
        <CaseCard caseObject={caseObject} key={caseObject.ID} saveCase={CaseService.createCase} />
      ))}
    </div>
  );
};

export default CardList;
