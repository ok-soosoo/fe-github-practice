import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
const square = <FontAwesomeIcon icon={faSquare} />;
const check = <FontAwesomeIcon icon={faSquareCheck} />;

function Todoitem({ todo }) {
  const handleDeleteClick = (id) => {
    console.log("delete click");
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => window.location.reload())
      .catch((err) => console.err(err));
  };
  const handlePatchClick = (todo) => {
    console.log("patch click");
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checked: !todo.checked,
      }),
    })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.err(err);
      });
  };
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`} onClick={() => handlePatchClick(todo)}>
        {checked ? check : square}
      </div>
      <div className="todotitle">{text} </div>
      <button onClick={() => handleDeleteClick(todo.id)}>삭제</button>
    </div>
  );
}

export default Todoitem;
