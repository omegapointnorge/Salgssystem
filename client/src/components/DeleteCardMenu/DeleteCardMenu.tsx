import styles from "./DeleteCardMenu.module.css";
import React from "react";

interface DeleteCardMenuProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  deleteCard: () => void;
}

const DeleteCardMenu: React.FC<DeleteCardMenuProps> = ({
  show,
  setShow,
  deleteCard,
}) => {
  if (!show) {
    return null;
  }
  return (
    <div>
      <div className={styles.deleteCardBackDrop}></div>
      <div className={styles.deleteCardButtons}>
        <button onClick={() => deleteCard()}>Slett</button>
        <button onClick={() => setShow(false)}>Avbryt</button>
      </div>
      <div
        className={styles.deleteCardMenuDismiss}
        onClick={() => setShow(false)}
      />
    </div>
  );
};

export default DeleteCardMenu;
