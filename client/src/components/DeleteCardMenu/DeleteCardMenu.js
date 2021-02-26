import styles from "./DeleteCardMenu.module.css";

const DeleteCardMenu = ({ show, setShow, deleteCard }) => {
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
