import styles from "./Modal.module.css";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {

  return <div onClick={props.hideModal} className={styles.backdrop}></div>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideModal={props.modalHider}></Backdrop>,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <div className={styles["modal"]} role="dialog" aria-modal="true" aria-labelledby="error" autoFocus={false}>
          <div className={styles["modal-title"]}>Invalid input</div>
          <div className={styles["modal-content"]}>
            {props.message.map((message) => {
              return <div>{message}</div>;
            })}
          </div>
          <Button
            name="Dismiss"
            action={props.modalHider}
            type="button"
            focus={true}
          ></Button>
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Modal;
