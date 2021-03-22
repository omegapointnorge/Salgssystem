import styles from "./CaseCard.module.css";
import React, { useState, MouseEvent } from "react";
import Case from "../../models/Case";
import DeleteCardMenu from "../DeleteCardMenu/DeleteCardMenu";
import TagContainer from "../TagContainer/TagContainer";
import DoubleClickEditInput from "../DoubleClickEditInput/DoubleClickEditInput";
import DoubleClickEditTextarea from "../DoubleClickEditTextarea/DoubleClickEditTextarea";

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
  const [showDeleteCardMenu, setShowDeleteCardMenu] = useState(false);

  const handleTagsChange = (caseTags: string[]) => {
    editCase({
      ...caseObject,
      caseTags: caseTags,
    });
  };

  const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log(event.target);
    console.log(event.currentTarget);
    

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    const selection = getSelection();
    selection?.empty();
  };

  const handleDeleteCaseClick = () => {
    // Oppdater state til DND
    slettCase(caseObject);
    setShowDeleteCardMenu(false);
  };

  const handleEditCaseInput = (key: string, value: string) => {
    editCase({
      ...caseObject,
      [key]: value,
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
      <DeleteCardMenu
        show={showDeleteCardMenu}
        setShow={setShowDeleteCardMenu}
        deleteCard={handleDeleteCaseClick}
      />
      <div className={styles.header}>
        <div className={styles.customerAvatar}></div>
        <div className={styles.ownerAvatar}>{ansvarlig}</div>
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
