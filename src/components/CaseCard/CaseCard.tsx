import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import Case from "../../models/Case";
import Ansvarlig from "../Ansvarlig/Ansvarlig";
import DeleteCardMenu from "../DeleteCardMenu/DeleteCardMenu";
import TagContainer from "../TagContainer/TagContainer";
import styles from "./CaseCard.module.css";

interface CaseCardProps {
  caseObject: Case;
  slettCase: (caseObject: Case) => void;
  editCase: (caseObject: Case) => void;
}

const CaseCard: React.FC<CaseCardProps> = ({
  caseObject,
  slettCase,
  editCase,
}) => {
  const [formValues, setFormValues] = useState<Case>(caseObject);
  const [showDeleteCardMenu, setShowDeleteCardMenu] = useState(false);

  const {
    ansvarlig,
    caseTags,
    dato,
    // frist,
    kontakt,
    // kunde,
    profilert,
  } = formValues;

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    editCase(formValues);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues.caseTags]);

  const handleCardBlur = () => {
    editCase(formValues);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [event.currentTarget.name]: event.currentTarget.value,
    } as Pick<Case, keyof Case>);
  };

  const handleMultilineInputChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormValues({
      ...formValues,
      [event.currentTarget.name]: event.currentTarget.value.split("\n"),
    } as Pick<Case, keyof Case>);
  };

  const handleTagsChange = (caseTags: string[]) => {
    setFormValues({
      ...formValues,
      caseTags: caseTags,
    } as Pick<Case, keyof Case>);
  };

  const handleAnsvarligChange = (username: string) => {
    console.log("I cahnge");
    setFormValues({
      ...formValues,
      ansvarlig: username
    } as Pick<Case, keyof Case>);
  }

  useEffect (() => {
    editCase(formValues);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ansvarlig])

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

  return (
    <div
      className={styles.card}
      onBlur={handleCardBlur}
      onDoubleClick={handleCardDoubleClick}
    >
      <DeleteCardMenu
        show={showDeleteCardMenu}
        setShow={setShowDeleteCardMenu}
        deleteCard={handleDeleteCaseClick}
      />
      <div className={styles.header}>
        <div className={styles.customerAvatar}></div>
        <Ansvarlig ansvarlig={ansvarlig} onChange={handleAnsvarligChange} />
      </div>
      <div className={styles.details}>
        <div>{dato?.toLocaleDateString()}</div>
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
          defaultValue={profilert?.join("\n")}
          onChange={handleMultilineInputChange}
        />
      </div>
    </div>
  );
};

export default CaseCard;
