import React from "react";
import { SalgsCase } from "../../graphql/API";
import Ansvarlig from "../Ansvarlig/Ansvarlig";
import DoubleClickEditInput from "../DoubleClickEditInput/DoubleClickEditInput";
import DoubleClickEditTextarea from "../DoubleClickEditTextarea/DoubleClickEditTextarea";
import TagContainer from "../TagContainer/TagContainer";
import styles from "./CaseCard.module.css";

interface CaseCardProps {
  caseObject: SalgsCase;
  slettCase: (caseObject: SalgsCase) => void;
  editCase: (caseObject: SalgsCase) => void;
}

const CaseCard: React.FC<CaseCardProps> = ({
  caseObject,
  slettCase,
  editCase,
}) => {
  let {
    ansvarlig,
    caseTags,
    createdAt,
    // frist,
    kontakt,
    // kunde,
    profilert,
    // status,
  } = caseObject;
  // const [showDeleteCardMenu, setShowDeleteCardMenu] = useState(false);

  const handleTagsChange = (caseTags: string[]) => {
    editCase({
      ...caseObject,
      caseTags: caseTags,
    });
  };

  // const handleDeleteCaseClick = () => {
  //   // Oppdater state til DND
  //   slettCase(caseObject);
  //   setShowDeleteCardMenu(false);
  // };

  const handleEditCaseInput = (key: string, value: string) => {
    editCase({
      ...caseObject,
      [key]: value,
    });
  };

  const handleAnsvarligChange = (username: string) => {
    editCase({
      ...caseObject,
      ansvarlig: username,
    });
  };

  const handleEditCaseTextarea = (key: string, value: string) => {
    editCase({
      ...caseObject,
      [key]: value.split("\n"),
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.customerAvatar}></div>
        <Ansvarlig
          ansvarlig={ansvarlig || ""}
          onChange={handleAnsvarligChange}
        />
      </div>
      <div className={styles.details}>
        <div>{new Date(createdAt!).toLocaleDateString()}</div>
        <DoubleClickEditInput
          value={kontakt || ""}
          placeholder={"Kontakt"}
          handleInputChange={(value) => handleEditCaseInput("kontakt", value)}
        />
        <TagContainer
          caseTags={caseTags || []}
          placeholder="Case tags"
          onChangeTags={handleTagsChange}
        />
        <DoubleClickEditTextarea
          value={profilert?.join("\n") || ""}
          placeholder="Profilert"
          handleTextareaChange={(value) =>
            handleEditCaseTextarea("profilert", value)
          }
        />
      </div>
    </div>
  );
};

export default CaseCard;
