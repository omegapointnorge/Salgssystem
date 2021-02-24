import { useState } from "react";
import { useDeepCompareEffect } from "../../hooks";
import TagContainer from "../TagContainer/TagContainer";
import styles from "./CaseCard.module.css";

const EMPTY_STATE = {
  ansvarlig: "",
  caseTags: [],
  dato: new Date(),
  frist: null,
  kontakt: "",
  kunde: "",
  profilert: "",
};

const CaseCard = ({ caseObject, saveCase, deleteCase }) => {
  const INITIAL_STATE = caseObject
    ? { ...caseObject, dato: new Date(caseObject?.dato) }
    : EMPTY_STATE;

  const [caseValues, setCaseValues] = useState(INITIAL_STATE);
  const [formValues, setFormValues] = useState(INITIAL_STATE);
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
    saveCase(caseValues);
  }, caseValues);

  const handleBlur = (event) => {
    const currentTarget = event.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setCaseValues(formValues);
      }
    }, 0);
  };

  const onChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeTags = (caseTags) => {
    setFormValues({
      ...formValues,
      caseTags: caseTags,
    });
  };

  const onDoubleClick = (event) => {
    event.target.blur();
    getSelection().empty();
    setShowDeleteCardMenu(true);
  };

  const deleteCaseHandler = () => {
    deleteCase(caseValues.ID);
    setShowDeleteCardMenu(false);
  };

  return (
    <div
      className={styles.card}
      onBlur={(e) => handleBlur(e)}
      onDoubleClick={(e) => onDoubleClick(e)}
    >
      {showDeleteCardMenu ? (
        <div>
          <div className={styles.deleteCardBackDrop}></div>
          <div className={styles.deleteCardButtons}>
            <button onClick={() => deleteCaseHandler()}>Slett</button>
            <button onClick={() => setShowDeleteCardMenu(false)}>Avbryt</button>
          </div>
          <div
            className={styles.deleteCardMenuDismiss}
            onClick={() => setShowDeleteCardMenu(false)}
          />
        </div>
      ) : null}
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
          onChange={onChange}
        />
        <TagContainer caseTags={caseTags} onChangeTags={onChangeTags} />
        <textarea name="profilert" placeholder="Profilert" />
      </div>
    </div>
  );
};

export default CaseCard;
