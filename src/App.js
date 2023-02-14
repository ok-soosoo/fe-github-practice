import { useState, useEffect } from "react";
import "./App.css";

import Status from "./components/Status";
import Main from "./pages/Main";
import Nav from "./components/Nav";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((err) => console.err(err));
  }, []);

  return (
    <>
      <div className="App-wrapper">
        <div className="App-body">
          <Status />
          <Main todos={todos} />
          <Nav />
        </div>
      </div>
    </>
  );
}

export default App;
