import { useState } from "react";
import TagContainer from "../TagContainer/TagContainer";
import styles from "./CaseCard.module.css";

const INITIAL_STATE = {
  ID: "",
  ansvarlig: "",
  caseTags: "",
  dato: new Date(),
  frist: null,
  kontakt: "",
  kunde: "",
  profilert: "",
};

const CaseCard = ({ caseObject = INITIAL_STATE, saveCase }) => {
  const [caseValues, setcaseValues] = useState(caseObject);

  const {
    ansvarlig,
    caseTags,
    dato,
    frist,
    kontakt,
    kunde,
    profilert,
  } = caseValues;

  const handleBlur = (event) => {
    const currentTarget = event.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        saveCase(caseValues);
      }
    }, 0);
  };

  const onChange = (event) => {
    setcaseValues({
      ...caseValues,
      [event.target.name]: event.target.value,
    });
  };

  const onChangeTags = (tags) => {
    setcaseValues({
      ...caseValues,
      caseTags: tags,
    });
  };

  return (
    <div className={styles.card} onBlur={(e) => handleBlur(e)}>
      <div className={styles.header}>
        <div className={styles.customerAvatar}></div>
        <div className={styles.ownerAvatar}>{ansvarlig}</div>
      </div>
      <div className={styles.details}>
        <input
          name="dato"
          placeholder="Dato"
          defaultValue={dato}
          onChange={onChange}
        />
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
