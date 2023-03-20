import React from 'react';
import './css/General.css'; 

const DrawkcabInput = ({ id, label, className, maxlength, value, onChange }) => {

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputVal = e.currentTarget.value;

    if(inputVal.length < value.length){
      return;
    }

    if(inputVal.length > maxlength){
      return;
    }

    const reversedValue = inputVal.substr(inputVal.length - 1).split("").reverse().join("") + inputVal.substr(0, inputVal.length - 1);
    onChange(reversedValue);
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace") {
      onChange(value.substr(1, value.length));
    }
  }

  return (
    <div className={className}>
      <label className="labels">{label}</label>
      <div className="input">
        <input id={id} className="input_display" value={value} onKeyDown={handleKeyDown} onChange={handleChange}/>
      </div>
    </div>
  );
};

export default DrawkcabInput;
