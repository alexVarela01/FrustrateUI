import React, { useState, useRef, useEffect } from 'react';
import './css/General.css'; 

const WaitForItButton = ({ id, label, className, onClick, timeNeeded = 5 }) => {
  const [waitTime, setWaitTime] = useState(timeNeeded);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const countdown = setInterval(() => {
      setWaitTime(seconds => seconds - 1);
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  function handleActualClick(){
    setWaitTime(timeNeeded)
    onClick()
  }

  return (
    <div className={className}>
      <div>
        {waitTime > 0 && (
          <div className="button-locker"><span>Wait For me 🥲... {waitTime}s</span></div>
        )}
        <button id={id} className="button" onClick={handleActualClick} ref={buttonRef}>{label}</button>
      </div>
    </div>
  );
};

export default WaitForItButton;
