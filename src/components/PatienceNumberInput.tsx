import React from 'react';
import './css/PatienceNumberInput.css'; // import the CSS file

const PatienceNumberInput = ({ label, className, maxlength,value, onChange, gap = 1}) => {

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
      <label className="pacience-label">{label}</label>
      <div className="pacience-input">
        <button className="pacience-input__button" onClick={() => handleAddDigit(- gap)}>-</button>
        <input disabled className="pacience-input__display" value={value}/>
        <button className="pacience-input__button" onClick={() => handleAddDigit(gap)}>+</button>
      </div>
    </div>
  );
};

export default PatienceNumberInput;
