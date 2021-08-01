import styles from "./Button.module.css";

const Button = (props) => {
  
  // if (props.type === "button") {
  //   console.log(document.activeElement);
  //   document.activeElement.focus();
  // } 
  return <button className={styles.button} onClick={props.action} type={props.type} autoFocus={props.focus}>{props.name}</button>;
};

export default Button;