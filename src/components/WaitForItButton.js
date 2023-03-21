import React, { useState, useRef, useEffect } from 'react';
import './css/General.css'; 

const WaitForItButton = ({ id, label, className, onClick, timeNeeded = 5 }) => {
  const [waitTime, setWaitTime] = useState(timeNeeded);
  const [hasStartedCountdown, setHasStartedCountdown] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    if(hasStartedCountdown){
      const countdown = setInterval(() => {
        setWaitTime(seconds => seconds - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [hasStartedCountdown]);

  function handleActualClick(){
    setWaitTime(timeNeeded)
    setHasStartedCountdown(false)
    onClick()
  }

  function handleStartCountdown(){
    setHasStartedCountdown(true)
  }

  return (
    <div className={className}>
      <div>
        {waitTime > 0 && hasStartedCountdown && (
          <div className="button-locker"><span>Wait For me 🥲... {waitTime}s</span></div>
        )}

        {!hasStartedCountdown && (
          <div className="button-locker" onClick={handleStartCountdown}><span>Click to start countdown</span></div>
        )}
        <button id={id} className="button" onClick={handleActualClick} ref={buttonRef}>{label}</button>
      </div>
    </div>
  );
};

export default WaitForItButton;
