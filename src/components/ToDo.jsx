import React from "react";

//events - delete and complete button

export default function ToDo({ text, setToDoItems, todoItems, todo }) {
  const handleDelete = () => {
    setToDoItems(todoItems.filter((el) => el.id !== todo.id));
  };

  const handleComplete = () => {
    setToDoItems(
      todoItems.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todocontainer">
      <div className={`todo ${todo.completed ? "completed" : ""}`}>
        {text}
        <button type="submit" onClick={handleComplete}>
          Complete
        </button>
        <button type="submit" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
