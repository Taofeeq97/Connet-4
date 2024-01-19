import React from 'react'
import '../Game.css';


const GameCircle = ({id, onBoardClick, className, children}) => {


  return (
    <div className={`gameCircle ${className}`}  onClick={() => onBoardClick(id)}>
        
    </div>
  )
}

export default GameCircle