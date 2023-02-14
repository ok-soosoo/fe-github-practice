import { useState } from "react";

function TodoInput() {
  const [inputvalue, setInputValue] = useState("");

  // value 내용변경반영
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  // Enter키 입력시
  const onKeyUpEnter = (e) => {
    if (e.key === "Enter") {
      console.log("create click");
      fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: inputvalue,
          checked: false,
        }),
      })
        .then(() => {
          window.location.reload();
        })
        .catch((err) => {
          console.err(err);
        });
    }
  };
  return (
    <>
      <input type="text" name="inputValue" onChange={onChangeInput} value={inputvalue} onKeyUp={onKeyUpEnter}></input>
    </>
  );
}

export default TodoInput;
