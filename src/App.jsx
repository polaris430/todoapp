import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

export default function App() {
  const [inputText, setInputText] = useState(""); //holding input txt
  const [todoItems, setToDoItems] = useState(() => {
    return JSON.parse(localStorage.getItem("todoItems"));
  }); //holding todos
  const [status, setStatus] = useState("all");
  const [filtereditems, setFilteredItems] = useState([]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredItems(todoItems.filter((e) => e.completed === true));
        break;
      case "uncompleted":
        setFilteredItems(todoItems.filter((e) => e.completed === false));
        break;
      case "all":
        setFilteredItems(todoItems);
        break;
    }
  };

  //useEffect

  useEffect(() => {
    getLocalToDo();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [todoItems, status]);

  //save to local

  const saveLocal = () => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  };

  const getLocalToDo = () => {
    if (localStorage.getItem("todoItems") === null) {
      localStorage.setItem("todoItems", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todoItems"));
      setToDoItems(todoLocal);
    }
  };

  return (
    <div className="App">
      <div className="heading">
        <h2> Sirius ToDo App</h2>
      </div>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todoItems={todoItems}
        setToDoItems={setToDoItems}
        setStatus={setStatus}
        status={status}
      />
      <ToDoList
        todoItems={todoItems}
        setToDoItems={setToDoItems}
        filtereditems={filtereditems}
      />
    </div>
  );
}
