import React, { useState, useEffect } from "react";
import "./App.scss";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./models/Board";
function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }

  return (
    <div className="App">
      <BoardComponent board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
