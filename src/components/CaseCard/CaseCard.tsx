import styles from "./CaseCard.module.css";
import React, { useState, ChangeEvent, useCallback } from "react";
import Case from "../../models/Case";
import DeleteCardMenu from "../DeleteCardMenu/DeleteCardMenu";
import TagContainer from "../TagContainer/TagContainer";
import { debounce } from "lodash";
import DoubleClickEditInput from "./DoubleClickEditInput";

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

  const debouncedInputChange = useCallback(
    debounce((event) => {
      console.log("HELLO");

      editCase({
        ...caseObject,
        [event.target.name]: event.target.value,
      });
    }, 500),
    []
  );
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    debouncedInputChange(event);
  };

  const debouncedMultilineInputChange = useCallback(
    (event) =>
      debounce(() => {
        editCase({
          ...caseObject,
          [event.currentTarget.name]: event.currentTarget.value.split("\n"),
        });
      }, 500),
    [caseObject, editCase]
  );
  const handleMultilineInputChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    debouncedMultilineInputChange(event);
  };

  const handleTagsChange = (caseTags: string[]) => {
    editCase({
      ...caseObject,
      caseTags: caseTags,
    });
  };

  const handleCardDoubleClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    const selection = getSelection();
    selection?.empty();
    setShowDeleteCardMenu(true);
  };

  const handleDeleteCaseClick = () => {
    // Oppdater state til DND
    slettCase(caseObject);
    setShowDeleteCardMenu(false);
  };

  const handleEditCase = (key: string, value: string) => {
    editCase({
      ...caseObject,
      [key]: value
    })
  }

  return (
    <div className={styles.card} /*onDoubleClick={handleCardDoubleClick}*/>
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
          handleInputChange={(value) => handleEditCase("kontakt", value)}
        />
        {/* <input
          name="kontakt"
          placeholder="Kontakt"
          defaultValue={kontakt}
          onChange={handleInputChange}
        /> */}
        <TagContainer caseTags={caseTags} onChangeTags={handleTagsChange} />
        <textarea
          name="profilert"
          placeholder="Profilert"
          defaultValue={profilert?.join("\n")}
          onChange={handleMultilineInputChange}
        />
      </div>
    </div>
  );
};

export default CaseCard;
