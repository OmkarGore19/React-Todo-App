import styles from "./WelcomeMessage.module.css";

export default function WelcomeMessage({ todoItems }) {
  return (
    todoItems.length === 0 && <p className={styles.para}>Enjoy your day!</p>
  );
}
