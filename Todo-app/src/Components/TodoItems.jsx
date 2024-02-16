import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

export default function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.todoDate}
          todoTask={item.todoTask}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}
