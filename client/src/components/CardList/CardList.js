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
      <CaseCard />
      <div>
        CASES:
        {cases.map((c) => (
          <CaseCard case_object={c} key={c.ID} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
