import React, { useState, useRef, useEffect } from 'react';
import './css/General.css'; 

const CantTouchThisButton = ({ id, label, className, onClick, speed = 1 }) => {
  const [position, setPosition] = useState({ top: 0, left: 0, speed: speed });
  const [initialPosition, setInitialPosition] = useState({ top: 50, left: 50 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const { top, left } = buttonRef.current!.getBoundingClientRect();
    setInitialPosition({ top, left });
    setPosition({ top, left, speed });
  }, [buttonRef]);

  function handleHover(event) {
    var left = Math.floor(getRandomInt(0, window.innerWidth - event.target.offsetWidth));
    var top = Math.floor(getRandomInt(0, window.innerHeight - event.target.offsetHeight));
    event.target.style=`position:absolute; left: ${left}px; top: ${top}px; transition: ${position.speed}s;`;
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function handleClick(event){
    event.target.style=`position:absolute;top:${initialPosition.top}px;left:${initialPosition.left}px;`;
    onClick()
  }

  return (
    <div className={"button-cont " + className}>
      <button id={id} className="button" style={{ transition: `0.1s`, top: `${position.top}px`, left: `${position.left}px` }} ref={buttonRef} onMouseEnter={handleHover} onClick={handleClick}>{label}</button>
    </div>
  );
};

export default CantTouchThisButton;
