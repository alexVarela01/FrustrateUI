import React from 'react';
import './css/PatienceNumberInput.css'; 
import './css/General.css'; 

const PatienceNumberInput = ({ id, label, className, maxlength,value, onChange, gap = 1}) => {

  const handleAddDigit = (digit) => {
    const newNumber = value + digit;
    if (newNumber >= 0) {
      if (maxlength && String(newNumber).length > maxlength) {
        return;
      }
      onChange(newNumber);
    }
  };

  return (
    <div className={className}>
      <label className="labels">{label}</label>
      <div className="input">
        <button className="pacience-input__button" onClick={() => handleAddDigit(- gap)}>-</button>
        <input id={id} disabled className="input_display pacience-input__display" value={value}/>
        <button className="pacience-input__button" onClick={() => handleAddDigit(gap)}>+</button>
      </div>
    </div>
  );
};

export default PatienceNumberInput;
