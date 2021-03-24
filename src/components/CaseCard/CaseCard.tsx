import React from "react";
import { IcontextMenuItem } from "../../common/types";
import Case from "../../models/Case";
import { Ansvarlig } from "../Ansvarlig/Ansvarlig";
import { ContextMenu } from "../ContextMenu/ContextMenu";
import DoubleClickEditInput from "../DoubleClickEditInput/DoubleClickEditInput";
import DoubleClickEditTextarea from "../DoubleClickEditTextarea/DoubleClickEditTextarea";
import TagContainer from "../TagContainer/TagContainer";
import TrashCan from "../TrashCan/TrashCan";
import styles from "./CaseCard.module.css";

interface CaseCardProps {
  caseObject: Case;
  slettCase: (caseObject: Case) => void;
  editCase: (caseObject: Case) => void;
}

const CaseCard: React.FC<CaseCardProps> = ({
  caseObject = new Case(),
  slettCase,
  editCase,
}) => {
  let {
    ansvarlig,
    caseTags,
    dato,
    // frist,
    kontakt,
    // kunde,
    profilert,
    // status,
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
      ansvarlig: username
    } as Pick<Case, keyof Case>);
  }

  const handleEditCaseTextarea = (key: string, value: string) => {
    editCase({
      ...caseObject,
      [key]: value.split("\n"),
    });
  };

  const contextMenuArray: IcontextMenuItem[] = [
    {
      id: 0,
      name: "Slett case",
      callback: () => handleDeleteCaseClick(),
      image: "",
      htmlElement: <TrashCan size="s"/>
    },
    {
      id: 1,
      name: "Lås case",
      callback: () => console.log("Låser"),
      image: "",
      htmlElement: null
    },
    {
      id: 2,
      name: "Lås opp case",
      callback: () => console.log("Låser opp"),
      image: "",
      htmlElement: null
    },
  ];

  const caseCardRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={caseCardRef} className={styles.card}>
      <ContextMenu menu={contextMenuArray} node={caseCardRef} />
      <div className={styles.header}>
        <div className={styles.customerAvatar}></div>
        <Ansvarlig ansvarlig={ansvarlig} onChange={handleAnsvarligChange} />
      </div>
      <div className={styles.details}>
        <div>{dato?.toLocaleDateString()}</div>
        <DoubleClickEditInput
          value={kontakt}
          handleInputChange={(value) => handleEditCaseInput("kontakt", value)}
        />
        <TagContainer caseTags={caseTags} onChangeTags={handleTagsChange} />
        <DoubleClickEditTextarea
          value={profilert?.join("\n")}
          handleTextareaChange={(value) =>
            handleEditCaseTextarea("profilert", value)
          }
        />
      </div>
    </div>
  );
};

export default CaseCard;