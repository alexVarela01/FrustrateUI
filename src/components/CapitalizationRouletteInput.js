import React from 'react';
import './css/General.css'; 

const ScreamingTextInput = ({ id, label, className, maxlength, value, onChange, chance = 0.2 }) => {

  const handleChange = (e) => {
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
      <label className="labels">{label}</label>
      <div className="input">
        <input id={id} className="input_display" value={value} onChange={handleChange}/>
      </div>
    </div>
  );
};

export default ScreamingTextInput;
