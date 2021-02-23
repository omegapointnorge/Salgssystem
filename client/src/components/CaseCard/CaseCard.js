import TagContainer from "../TagContainer/TagContainer";
import styles from "./CaseCard.module.css";

const CaseCard = ({ case_object }) => {
  const { ansvarlig, dato, caseTags, profilert } = case_object || {};
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.customerAvatar}></div>
        <div className={styles.ownerAvatar}>{ansvarlig}</div>
      </div>
      <div className={styles.details}>
        <input
          name="dato_frist"
          placeholder="Dato - Frist"
          defaultValue={dato}
        />
        <input name="kontakt" id="kontakt" placeholder="Kontakt" />
        <TagContainer caseTags={caseTags} />
        <textarea
          name="profilert"
          placeholder="Profilert"
          defaultValue={profilert?.join("\n")}
        />
      </div>
    </div>
  );
};

export default CaseCard;
