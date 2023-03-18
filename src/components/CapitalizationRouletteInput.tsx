import React, { useState } from 'react';
import './css/CapitalizationRouletteInput.css'; // import the CSS file

const ScreamingTextInput = ({ label, className, maxlength, value, onChange, chance = 0.2 }) => {
  const [pressingShift, setPressingShift] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputVal = e.currentTarget.value;

    if(inputVal.length > maxlength){
      return;
    }

    if (inputVal.includes(value)) {
      var newVal = inputVal.replace(value, '');
  
      if (Math.random() < chance) {
        onChange(value + newVal.toUpperCase());
      } else {
        onChange(value + newVal.toLowerCase());
      }
    } else {
      onChange(inputVal);
    }
  };

  const handleKeyDown = (event) => {
    if (event.code === "ShiftLeft") {
      if(!pressingShift){
        setPressingShift(true)
      }
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === "ShiftLeft") {
      if(pressingShift){
        setPressingShift(false)
      }
    }
  };

  return (
    <div className={className}>
      <label className="random-label">{label}</label>
      <div className="random-input">
        <input onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} className="random-input__display" value={value} onChange={handleChange}/>
      </div>
    </div>
  );
};

export default ScreamingTextInput;
