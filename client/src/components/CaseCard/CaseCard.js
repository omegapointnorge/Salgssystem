import TagContainer from "../TagContainer/TagContainer";
import styles from "./CaseCard.module.css";

const CaseCard = (props) => {

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.customerAvatar}></div>
        <div className={styles.ownerAvatar}></div>
      </div>
      <div className={styles.details}>
        <TagContainer />
        <textarea name="profilert" id="profilert" placeholder="Profilert" />
        <input name="dato_frist" id="dato_frist" placeholder="Dato - Frist" />
        <input name="kontakt" id="kontakt" placeholder="Kontakt" />
      </div>
    </div>
  );
};

export default CaseCard;