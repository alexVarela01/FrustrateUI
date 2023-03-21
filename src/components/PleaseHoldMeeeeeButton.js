import React, { useState, useRef, useEffect } from 'react';
import './css/General.css'; 

const PleaseHoldMeeeeeButton = ({ id, label, className, onClick, time = 5 }) => {
  const [isHolding, setIsHolding] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(time);
  const holdTime = useRef(null);
  const divRef = useRef(null);

  const handleMouseDown = () => {
    setIsHolding(true);
    setTimeLeft(time);
  };

  const handleMouseUp = () => {
    clearTimeout(holdTime.current);
    setIsHolding(false);
    setIsEnabled(false);
    setTimeLeft(time);
  };

  function handleActualClick() {
    if (isEnabled) {
      onClick();
      setIsEnabled(false);
      setIsHolding(false);
      setTimeLeft(time);
      if(divRef.current) divRef.current.focus(); // removing focus
    }
  }

  useEffect(() => {
    let intervalId;
    if (isHolding) {
      intervalId = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 1) {
            setIsEnabled(true);
            clearInterval(intervalId);
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isHolding, timeLeft]);

  return (
    <div className={className}>
      <div>
        {!isEnabled && (
          <div onMouseDown={handleMouseDown} ref={divRef} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} className="button-locker">
            <span>Hold me for {timeLeft}s</span>
          </div>
        )}
        <button id={id} className="button" onClick={handleActualClick}>
          {isEnabled ? label : `${label}`}
        </button>
      </div>
    </div>
  );
};

export default PleaseHoldMeeeeeButton;
