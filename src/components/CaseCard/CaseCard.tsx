import React from "react";
import { IcontextMenuItem } from "../../common/types";
import { SalgsCase } from "../../graphql/API";
import { Ansvarlig } from "../Ansvarlig/Ansvarlig";
import { ContextMenu } from "../ContextMenu/ContextMenu";
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
    laast,
  } = caseObject;

  const handleTagsChange = (caseTags: string[]) => {
    editCase({
      ...caseObject,
      caseTags: caseTags,
    });
  };

  const handleDeleteCaseClick = () => {
    // Oppdater state til DND
    slettCase(caseObject);
  };

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
    let lineList = value.split("\n");
    let noEmptyLines = lineList.filter((line) => !!line);
    
    editCase({
      ...caseObject,
      [key]: noEmptyLines,
    });
  };

  const handleLockCase = () => {
    editCase({
      ...caseObject,
      laast: !laast,
    });
  }

  const contextMenuArray: IcontextMenuItem[] = [
    {
      id: 0,
      name: "Slett case",
      callback: () => handleDeleteCaseClick(),
      htmlElementID: "TrashCan"
    }
  ];

  function getMenu(){
    if(!laast)
      return <ContextMenu menu={contextMenuArray} node={caseCardRef} />
  }

  const caseCardRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={caseCardRef} className={`${styles.card} ${laast ? styles.cardLocked : ""}`}>
      {getMenu()}
      <div className={styles.header}>
        <div className={styles.customerAvatar}></div>
        <Ansvarlig
          ansvarlig={ansvarlig || ""}
          laast={laast}
          onChange={handleAnsvarligChange}
        />
      </div>
      <div className={styles.details}>
        <div>{new Date(createdAt!).toLocaleDateString("nb-NO")}</div>
        <DoubleClickEditInput
          value={kontakt || ""}
          placeholder={"Kontakt"}
          laast={laast}
          handleInputChange={(value) => handleEditCaseInput("kontakt", value)}
        />
        <TagContainer
          caseTags={caseTags || []}
          placeholder="Case tags"
          laast={laast}
          onChangeTags={handleTagsChange}
        />
        <DoubleClickEditTextarea
          value={profilert?.join("\n") || ""}
          placeholder="Profilert"
          laast={laast}
          handleTextareaChange={(value) =>
            handleEditCaseTextarea("profilert", value)
          }
        />
        <button 
          className={laast ? styles.locked : styles.unlocked} 
          onClick={handleLockCase} 
          title={laast ? "Case er låst" : "Case er ikke låst"}
          role="img"
        />
      </div>
    </div>
  );
};

export default CaseCard;
