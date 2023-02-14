import React from "react";
import Todoitem from "./Todoitem";

function TodoList({ todos }) {
  return (
    <div className="TodoItem-wrapper">
      {todos.map((todo) => (
        <Todoitem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
