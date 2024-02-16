import { useState } from "react";
import AppName from "./Components/AppName";
import AppTodo from "./Components/Apptodo";
import TodoItem from "./Components/TodoItem";
import TodoItems from "./Components/TodoItems";
import "./styles/App.css";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`${itemName} ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { todoTask: itemName, todoDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    console.log(todoItemName);
    let newTodoItems = todoItems.filter(
      (item) => item.todoTask != todoItemName
    );
    setTodoItems(newTodoItems);
    console.log(newTodoItems); // Add this line to check the new state
  };

  return (
    <center class="todo-container">
      <AppName />
      <AppTodo handleNewItem={handleNewItem} />
      <WelcomeMessage todoItems={todoItems} />
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}
export default App;
