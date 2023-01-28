import React from "react";
import SingleToDo from "./SingleToDo/SingleToDo";
import "./ToDo.scss";
import TodoInput from "./ToDoInput/TodoInput";

const ToDo = () => {
  return (
    <div className="todo__main">
      <TodoInput />
      <div className="todo__container">
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
      </div>
    </div>
  );
};

export default ToDo;
