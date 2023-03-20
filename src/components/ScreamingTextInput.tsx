import React, { useState } from 'react';
import './css/General.css'; 

const ScreamingTextInput = ({ id, label, className, maxlength, value, onChange }) => {
  const [pressingShift, setPressingShift] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputVal = e.currentTarget.value;

    if(inputVal.length > maxlength){
      return;
    }

    if (inputVal.includes(value)) {
      var newVal = inputVal.replace(value, '');
  
      if (!pressingShift) {
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
      <label className="labels">{label}</label>
      <div className="input">
        <input id={id} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} className="input_display" value={value} onChange={handleChange}/>
      </div>
    </div>
  );
};

export default ScreamingTextInput;
