import { Fragment, useState } from "react";


function Square({value, onSquareClick}) {
  return (
    <button className="Square" onClick={onSquareClick}>{value}</button>
  ); 
}

export default function Board() {
  const [squares, SetSquares] = useState(Array(9).fill(null)); 
  return (
    <>
    <div className="board-row">
      <Square value={squares[0]}/>
      <Square value={squares[1]}/>
      <Square value={squares[2]}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]}/>
      <Square value={squares[4]}/>
      <Square value={squares[5]}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]}/>
      <Square value={squares[7]}/>
      <Square value={squares[8]}/>
    </div>
    </>

  )
}