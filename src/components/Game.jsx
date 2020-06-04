import React from "react";
import Board from "./Board.jsx"
import { useSelector, useDispatch } from "react-redux";
import { mapGrids, gameState } from "../redux/actions";
import { createGameBoard } from "../redux/model";

export default function Game(props) {
  const dispatch = useDispatch();

	//create model of minesweeper board
	var map = createGameBoard(10,10);
	dispatch(mapGrids(map));

	//Check if gamestate is false
	// const gameStatus = useSelector((state) => state.gameState.status);
	// console.log('this is game status', gameStatus)
	
	// var gameOver;

	// if (!gameStatus) {
	// 	gameOver = <h2> GAME OVER </h2>;
	// }


	return (
		<div>
			<h3>TakTakTaka Minesweeper</h3>
			<Board />
			{/* {gameOver} */}
		</div>
	);
}

