import React from "react";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";
import "./Main.css";
function Main({ todos }) {
  return (
    <div className="TodoList-wrapper">
      <div className="title">To Do</div>
      <TodoInput />
      <TodoList todos={todos}></TodoList>
    </div>
  );
}

export default Main;
