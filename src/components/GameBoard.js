import React, {useState, useEffect} from "react";
import GameCircle from "./GameCircle";
import '../Game.css';
import Header from "./Header";
import Footer from "./Footer";
import isWinner from "../helper";

import { 
    GAME_STATE_PLAYING, 
    GAME_STATE_WIN, 
    GAME_STATE_DRAW,
    NO_OF_CIRCLES, 
    NO_PLAYER, 
    PLAYER1, 
    PLAYER2
 } from "../constants";
import isDraw from "../drawHelper";


const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(NO_OF_CIRCLES).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER1)
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const [winner, setWinner] =  useState(NO_PLAYER);

    console.log(gameBoard);
    console.log(currentPlayer)

    useEffect(() => {
        initGame();
    }, []);

    const initGame = () => {
      setGameBoard(Array(NO_OF_CIRCLES).fill(NO_PLAYER));
      setCurrentPlayer(PLAYER1);
      setGameState(GAME_STATE_PLAYING)
    }
    
    const initBoard = () => {
        
        const circles = [];
        for (let i = 0; i < NO_OF_CIRCLES; i++){
            circles.push(renderCircle(i))
        }
        return circles;
    }
    

    const CircleClicked = (id) => { 
        if (gameBoard[id] !== NO_PLAYER) return
        if (gameState !== GAME_STATE_PLAYING) return
        

        if (isWinner(gameBoard, id, currentPlayer)) {
            setGameState(GAME_STATE_WIN);
            setWinner(currentPlayer);
        }

        if (isDraw(gameBoard, id, currentPlayer)) {
            setGameState(GAME_STATE_DRAW);
            setWinner(NO_PLAYER);
        }

        setGameBoard(prev => {
            return prev.map((circle, pos) => pos===id ? currentPlayer : circle)
        })

        setCurrentPlayer(currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1)

    }  

    const renderCircle = (id) => {
        return (
            <GameCircle key={id} id={id} className={`player${gameBoard[id]}`} onBoardClick={CircleClicked}/>
        )
    }
    return(
        <>
            <Header gameState={gameState} currentPlayer={currentPlayer} winner={winner}/>
            <div className="gameBoard">
                {initBoard()}
            </div>
            <Footer onClickEvent={initGame} gameState={gameState}/>
        </>
    )
}


export default GameBoard;