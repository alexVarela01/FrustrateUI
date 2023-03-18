import React, { useState } from 'react';
import './css/CapitalizationRouletteInput.css'; // import the CSS file

const ScreamingTextInput = ({ label, className, maxlength, value, onChange, chance = 0.2 }) => {

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
        onChange(value + newVal);
      }
    } else {
      onChange(inputVal);
    }
  };

  return (
    <div className={className}>
      <label className="random-label">{label}</label>
      <div className="random-input">
        <input className="random-input__display" value={value} onChange={handleChange}/>
      </div>
    </div>
  );
};

export default ScreamingTextInput;
