import styles from "./Modal.module.css";
import Button from "./Button";

const Modal = (props) => {
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-title"]}>Invalid input</div>
      <div className={styles["modal-content"]}>
        {props.message.map((message) => {
          return <div>{message}</div>;
        })}
      </div>
      {/* <button onClick={props.modalHider}>Dismiss</button> */}
      <Button name="Dismiss" action={props.modalHider}></Button>
    </div>
  );
};

export default Modal;
