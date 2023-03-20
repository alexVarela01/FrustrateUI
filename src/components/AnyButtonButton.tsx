import React, { useState, useRef, useEffect } from 'react';
import './css/General.css'; 

const CantTouchThisButton = ({ id, label, className, onClick, clicksNeeded = 5 }) => {
  const [currentClick, setCurrentClick] = useState(clicksNeeded);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function handleClick(){
    setCurrentClick(currentClick - 1)
  }

  function handleActualClick(){
    setCurrentClick(clicksNeeded)
    onClick()
  }

  return (
    <div className={className}>
      <div>
        {currentClick > 0 && (
          <div onClick={handleClick} className="button-locker"><span>({currentClick}) Click to Unlock</span></div>
        )}
        <button id={id} className="button" onClick={handleActualClick} ref={buttonRef}>{label}</button>
      </div>
    </div>
  );
};

export default CantTouchThisButton;
