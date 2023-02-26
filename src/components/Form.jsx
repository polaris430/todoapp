import React from "react";

export default function Form({
  setInputText,
  inputText,
  todoItems,
  setToDoItems,
  setStatus,
}) {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };

  const addToDo = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setToDoItems([
      ...todoItems,
      {
        text: inputText,
        completed: false,
        id: todoItems.length + 1,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form className="form">
        Enter Items
        <input
          className="userinput"
          type="text"
          onChange={handleInputText}
          value={inputText}
        ></input>
        <button className="savebtn" onClick={addToDo} type="submit">
          save
        </button>
        <select onChange={statusHandler} className="dropdown">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </form>
    </div>
  );
}
