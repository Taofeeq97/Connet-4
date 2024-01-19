import React from 'react';

import { 
  GAME_STATE_PLAYING, 

} from "../constants";

const Footer = ({ onClickEvent, gameState }) => {

  const renderButton = () => {
    if (gameState !== GAME_STATE_PLAYING) {
      return <button onClick={onClickEvent}>New Game</button>
    }
    return
  }
  return (
    <div className='footer'>
      {renderButton()}
    </div>
  );
};

export default Footer;
