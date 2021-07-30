import styles from "./Button.module.css";

const Button = (props) => {
  return <button className={styles.button} onClick={props.action}>{props.name}</button>;
};

export default Button;