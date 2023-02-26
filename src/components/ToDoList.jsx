import React from "react";
import ToDo from "./ToDo.jsx";

export default function ToDoList({ todoItems, setToDoItems, filtereditems }) {
  return (
    <div className="ToDoList">
      {filtereditems.map((todo) => (
        <ToDo
          setToDoItems={setToDoItems}
          todoItems={todoItems}
          key={todo.id}
          text={todo.text}
          todo={todo}
        />
      ))}
    </div>
  );
}
