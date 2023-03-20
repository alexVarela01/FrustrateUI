import React from 'react';
import './css/NoMistakesAlowedInput.css'; // import the CSS file

const NoMistakesAlowedInput = ({ label, className, maxlength, value, onChange }) => {

  const handleChange = (e) => {
    const input = e.target.value;

    if(input.length > maxlength){
      return;
    }

    onChange(input)
  };

  const handleKeyDown = (event) => {
    // Disable backspace key
    if (event.keyCode === 8) {
      event.preventDefault();
    }
    //disable delete key
    if (event.keyCode === 46) {
      event.preventDefault();
    }
    // Disable left and right arrow keys
    if (event.keyCode === 37 || event.keyCode === 39) {
      event.preventDefault();
    }
    // Disable mouse cursor movement
    if (event.type === "mousemove") {
      event.preventDefault();
    }
    // Disable ctrl+a select
    if (event.keyCode === 65 && event.ctrlKey) {
      event.preventDefault();
    }
    // Disable replace
    if (event.target.selectionStart !== event.target.selectionEnd) {
      event.preventDefault();
    }
  };

  const handleClick = (event) => {
    const {value} = event.target;
    const position = value.length;
    event.target.setSelectionRange(position, position);
 }

  const handleClear = (e) => {
    onChange("")
  };

  return (
    <div className={className}>
      <label className="no-mistake-label">{label}</label>
      <div className="no-mistake-input">
        <input onKeyDown={handleKeyDown} className="no-mistake-input__display" onClick={handleClick} type="text" value={value}  onChange={handleChange}/>
        <button className="no-mistake-button" onClick={handleClear}>X</button>
      </div>
    </div>
  );
};

export default NoMistakesAlowedInput;
