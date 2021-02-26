import { useState } from "react";
import { useDeepCompareEffect } from "../../hooks";
import DeleteCardMenu from "../DeleteCardMenu/DeleteCardMenu";
import TagContainer from "../TagContainer/TagContainer";
import styles from "./CaseCard.module.css";

const CaseCard = ({ caseObject, saveCase, deleteCase }) => {
  const [caseState, setCaseState] = useState(caseObject);
  const [formValues, setFormValues] = useState(caseObject);
  const [showDeleteCardMenu, setShowDeleteCardMenu] = useState(false);

  const {
    ansvarlig,
    caseTags,
    dato,
    frist,
    kontakt,
    kunde,
    profilert,
  } = formValues;

  useDeepCompareEffect((_) => {
    saveCase(caseState);
  }, caseState);

  const handleCardBlur = (event) => {
    const currentTarget = event.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setCaseState(formValues);
      }
    }, 0);
  };

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleTagsChange = (caseTags) => {
    setFormValues({
      ...formValues,
      caseTags: caseTags,
    });
  };

  const handleCardDoubleClick = (event) => {
    event.target.blur();
    getSelection().empty();
    setShowDeleteCardMenu(true);
  };

  const handleDeleteCaseClick = () => {
    deleteCase(caseState);
    setShowDeleteCardMenu(false);
  };

  return (
    <div
      className={styles.card}
      onBlur={(e) => handleCardBlur(e)}
      onDoubleClick={(e) => handleCardDoubleClick(e)}
    >
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
        <div>{dato.toLocaleDateString()}</div>
        <input
          name="kontakt"
          placeholder="Kontakt"
          defaultValue={kontakt}
          onChange={handleInputChange}
        />
        <TagContainer caseTags={caseTags} onChangeTags={handleTagsChange} />
        <textarea
          name="profilert"
          placeholder="Profilert"
          defaultValue={profilert}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default CaseCard;
